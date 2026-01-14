import { useEffect } from "react";
import { useState } from "react";
import "./programs.css";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  // 2. Déclaration de l'état (la liste des séries)
  const [programs, setPrograms] = useState<Program[]>([]);

  // Exemple rapide de ce qui doit être dans programs.tsx
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data); // Maintenant setPrograms existe !
      })
      .catch((error) => console.error("Erreur :", error));
  }, []);

  return (
    <div>
      <h1>Liste des Séries</h1>
      <ul>
        {/* 3. On boucle sur les données pour les afficher */}
        {programs.map((program) => (
          <li key={program.id}>
            {program.title} - {program.synopsis}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
