
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useBookings } from "@/hooks/useBookings";
import { toast } from "sonner";
import { CalendarIcon, Clock, User, Phone, Mail } from "lucide-react";

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

const serviceTypes = [
  "Przegląd gazowy",
  "Przegląd elektryczny", 
  "Przegląd kominiarski",
  "Przegląd kompleksowy"
];

export const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    serviceType: "",
    notes: ""
  });

  const { addBooking, isTimeSlotAvailable } = useBookings();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.serviceType) {
      toast.error("Wypełnij wszystkie wymagane pola");
      return;
    }

    if (!isTimeSlotAvailable(selectedDate, selectedTime)) {
      toast.error("Ten termin jest już zajęty");
      return;
    }

    addBooking({
      date: selectedDate,
      time: selectedTime,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      serviceType: formData.serviceType
    });

    toast.success("Rezerwacja została złożona! Skontaktujemy się z Tobą wkrótce.");
    
    // Reset formularza
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      serviceType: "",
      notes: ""
    });
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Niedziela lub sobota
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Umów się na przegląd
          </h2>
          <p className="text-xl text-gray-400">
            Wybierz dogodny termin i wypełnij formularz
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Kalendarz */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Wybierz datę
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => isWeekend(date) || isPastDate(date)}
                className="rounded-md border border-gray-600 bg-gray-700/50 text-white"
              />
              
              {selectedDate && (
                <div className="mt-6">
                  <Label className="text-white mb-3 block flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Dostępne godziny
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => {
                      const available = isTimeSlotAvailable(selectedDate, time);
                      return (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          disabled={!available}
                          onClick={() => setSelectedTime(time)}
                          className={`${
                            selectedTime === time 
                              ? "bg-red-500 hover:bg-red-600" 
                              : available 
                                ? "border-gray-600 text-white hover:bg-gray-700" 
                                : "opacity-50 cursor-not-allowed"
                          }`}
                        >
                          {time}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Formularz */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="w-5 h-5" />
                Twoje dane
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">Imię *</Label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="bg-gray-700/50 border-gray-600 text-white"
                      placeholder="Twoje imię"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Nazwisko *</Label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="bg-gray-700/50 border-gray-600 text-white"
                      placeholder="Twoje nazwisko"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefon *
                  </Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="bg-gray-700/50 border-gray-600 text-white"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <Label className="text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-gray-700/50 border-gray-600 text-white"
                    placeholder="twoj@email.com"
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Rodzaj przeglądu *</Label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                  >
                    <option value="">Wybierz rodzaj przeglądu</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label className="text-gray-300">Dodatkowe uwagi</Label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    className="bg-gray-700/50 border-gray-600 text-white"
                    placeholder="Opisz szczegóły dotyczące przeglądu..."
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3"
                  disabled={!selectedDate || !selectedTime}
                >
                  Zarezerwuj termin
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
