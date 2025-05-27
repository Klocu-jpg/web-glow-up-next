
import { useState, useEffect } from 'react';

export interface Booking {
  id: string;
  date: Date;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  serviceType: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Wczytaj rezerwacje z localStorage przy starcie
  useEffect(() => {
    const savedBookings = localStorage.getItem('przegladydomowe-bookings');
    if (savedBookings) {
      const parsed = JSON.parse(savedBookings);
      setBookings(parsed.map((booking: any) => ({
        ...booking,
        date: new Date(booking.date),
        createdAt: new Date(booking.createdAt)
      })));
    }
  }, []);

  // Zapisz rezerwacje do localStorage przy każdej zmianie
  useEffect(() => {
    localStorage.setItem('przegladydomowe-bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (bookingData: Omit<Booking, 'id' | 'status' | 'createdAt'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date()
    };
    setBookings(prev => [...prev, newBooking]);
    return newBooking;
  };

  const updateBookingStatus = (id: string, status: 'accepted' | 'rejected') => {
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  const getBookingsByDate = (date: Date) => {
    return bookings.filter(booking => 
      booking.date.toDateString() === date.toDateString()
    );
  };

  const isTimeSlotAvailable = (date: Date, time: string) => {
    return !bookings.some(booking => 
      booking.date.toDateString() === date.toDateString() && 
      booking.time === time &&
      booking.status !== 'rejected'
    );
  };

  return {
    bookings,
    addBooking,
    updateBookingStatus,
    getBookingsByDate,
    isTimeSlotAvailable
  };
};
