
import { useState } from "react";
import { AdminPanel } from "@/components/AdminPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock, User } from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  // Demo credentials
  const DEMO_USERNAME = "admin";
  const DEMO_PASSWORD = "admin123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (credentials.username === DEMO_USERNAME && credentials.password === DEMO_PASSWORD) {
      setIsLoggedIn(true);
      toast.success("Zalogowano pomyślnie!");
    } else {
      toast.error("Nieprawidłowe dane logowania");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ username: "", password: "" });
    toast.success("Wylogowano pomyślnie");
  };

  if (isLoggedIn) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800/50 border-gray-700">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Panel Administracyjny</CardTitle>
          <p className="text-gray-400">Zaloguj się, aby zarządzać rezerwacjami</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Nazwa użytkownika
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  className="bg-gray-700/50 border-gray-600 text-white pl-10"
                  placeholder="admin"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Hasło
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="bg-gray-700/50 border-gray-600 text-white pl-10"
                  placeholder="admin123"
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-red-500 hover:bg-red-600 mt-6"
            >
              Zaloguj się
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-400 text-center">
              <strong>Demo:</strong><br />
              Login: admin<br />
              Hasło: admin123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
