'use client'
import { motion } from 'framer-motion'
import React, { useState, useRef, useEffect } from "react";

export default function Desplegable() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    return (
        <section ref={menuRef}> {/* Esto hay que agregarlo dentro del tag nav */}
                <button className="btn-desplegable" onClick={toggleDropdown}> Sobre Nosotros</button>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.85 }}
                    >
                        <ul className="btn-desplegable-abierto">
                            <li className="mb-2 text-body-desplegable"><a href="#">Casos de Estudio</a></li>
                            <li className="mb-2 text-body-desplegable"><a href="#">Que Ofrecemos</a></li>
                            <li className="mb-2 text-body-desplegable"><a href="#">Beneficios</a></li>
                        </ul>
                    </motion.div>
                )}
        </section>
    )
}