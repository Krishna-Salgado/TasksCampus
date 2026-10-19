import { useState, useEffect } from 'react';
import * as tareasService from '../services/tareasService';

export function useTareas() {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [guardando, setGuardando] = useState(false); 

  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    try {
      setCargando(true);
      const data = await tareasService.fetchTareas();
      setTareas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  const agregarTarea = async (titulo) => {
    try {
      setGuardando(true);
      const nueva = await tareasService.createTarea({ title: titulo, completed: false });
      
      nueva.id = Date.now(); 
      setTareas((prev) => [nueva, ...prev]);
    } catch (err) {
      setError(err.message);
    } finally {
      setGuardando(false);
    }
  };

  const actualizarTarea = async (id, datos) => {
    try {
      setGuardando(true);
      const actualizada = await tareasService.updateTarea(id, datos);
      setTareas((prev) => prev.map((t) => (t.id === id ? { ...t, ...actualizada } : t)));
    } catch (err) {
      setError(err.message);
    } finally {
      setGuardando(false);
    }
  };

  const eliminarTarea = async (id) => {
    try {
      setGuardando(true);
      await tareasService.deleteTarea(id);
      setTareas((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setGuardando(false);
    }
  };

  return { tareas, cargando, error, guardando, agregarTarea, actualizarTarea, eliminarTarea };
}