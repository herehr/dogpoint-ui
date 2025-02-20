"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";

export default function DogpointUI() {
  // const [selectedDog, setSelectedDog] = useState(null);
  const dogs = [
    { id: 1, name: "Rex", age: "3 roky", size: "Velký", status: "Dostupný" },
    { id: 2, name: "Bella", age: "2 roky", size: "Střední", status: "Adoptovaný" },
    { id: 3, name: "Charlie", age: "1 rok", size: "Malý", status: "Dostupný" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <Image src="/dogpoint-logo.png" alt="Dogpoint Logo" width={120} height={80} />
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">Domů</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">Adopce</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">Kontakt</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center mt-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Najdi si svého psího parťáka! 🐶
        </h1>
      </header>

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const selectedDog = ...;



      {/* Filter */}
      <Select
        onChange={(e) => setSelectedDog(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 text-lg text-gray-700 w-full max-w-md shadow-sm focus:ring-2 focus:ring-blue-500 mt-4"
      >
        <SelectItem value="all">Všichni psi</SelectItem>
        <SelectItem value="available">Dostupní psi</SelectItem>
      </Select>

      {/* Dog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        {dogs.map((dog) => (
          <Card key={dog.id} className="p-4 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition">
            <CardContent>
              <h2 className="text-lg font-semibold text-gray-800">{dog.name}</h2>
              <p className="text-gray-600">Věk: {dog.age}</p>
              <p className="text-gray-600">Velikost: {dog.size}</p>
              <p className={`font-semibold ${dog.status === "Dostupný" ? "text-green-600" : "text-red-600"}`}>{dog.status}</p>
              {dog.status === "Dostupný" && (
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all">
                  Virtuálně adoptovat
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full bg-white py-6 mt-10 text-center text-gray-600 border-t">
        <p>&copy; 2025 Dogpoint. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}
