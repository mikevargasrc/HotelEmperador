package com.cursojava.curso.repo;

import com.cursojava.curso.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {



}
