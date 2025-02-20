"use client";

import Image from "next/image"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";

const dogs = [
  { id: "rex", name: "Rex", age: "3 roky", size: "Velký", status: "Dostupný", img: "/dogs/rex.jpg" },
  { id: "bella", name: "Bella", age: "2 roky", size: "Střední", status: "Adoptovaný", img: "/dogs/bella.jpg" },
  { id: "charlie", name: "Charlie", age: "1 rok", size: "Malý", status: "Dostupný", img: "/dogs/charlie.jpg" }
];

export default function DogpointUI() {
  // Zustand für das ausgewählte Tier
  const [selectedDog, setSelectedDog] = useState(null);
  const [filter, setFilter] = useState("all");

  // Debugging: Sicherstellen, dass die Variable genutzt wird
  console.log("Selected Dog:", selectedDog);

  // Gefilterte Hunde
  const filteredDogs = dogs.filter(dog => filter === "all" || dog.status === filter);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Najdi si svého psího parťáka! 🐶</h1>

      {/* Filter Dropdown */}
      <Select onValueChange={(value) => setFilter(value)} className="w-full mb-4">
        <SelectItem value="all">Všichni psi</SelectItem>
        <SelectItem value="Dostupný">Dostupní psi</SelectItem>
        <SelectItem value="Adoptovaný">Adoptovaní psi</SelectItem>
      </Select>

      {/* Hunde-Liste */}
      <div className="grid gap-4">
        {filteredDogs.map(dog => (
          <Card key={dog.id} className="flex flex-col items-center p-4">
            <Image 
            src={dog.img} 
            alt={dog.name} 
            width={128} 
            height={128} 
            className="w-32 h-32 object-cover rounded-full mb-2"
            />

            <CardContent className="text-center">
              <h2 className="text-lg font-bold">{dog.name}</h2>
              <p>{dog.age} | {dog.size}</p>
              <p className={`mt-1 ${dog.status === "Dostupný" ? "text-green-600" : "text-red-600"}`}>
                {dog.status}
              </p>
              {dog.status === "Dostupný" && (
                <Button 
                  className="mt-2" 
                  onClick={() => {
                    setSelectedDog(dog.name);
                    alert(`Adoptoval jsi: ${dog.name}`);
                  }}>
                  Virtuálně adoptovat
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Anzeigen des ausgewählten Hundes */}
      {selectedDog && (
        <div className="mt-6 text-center p-3 bg-gray-100 rounded">
          <p className="text-lg font-semibold">Vybraný pes: {selectedDog}</p>
        </div>
      )}
    </div>
  );
}
