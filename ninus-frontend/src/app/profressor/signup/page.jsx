"use client";

import React, { useState } from 'react';
import api from '@/api/api';
import Image from 'next/image';

export default function TelaCadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [schoolType, setSchoolType] = useState('');

  const dadosUsuario = {
    name: nome,
    email: email,
    password: senha,
    school_type: 'CEI_PRIVADO'
  };

  function handleSubmit(event){
    event.preventDefault();

    api.post('/api/v1/client', dadosUsuario)
        .then((res) => {
            console.log(res);
            const clienteCadastrado = res.data;
            window.alert(`Cliente [${clienteCadastrado['name']}] cadastrado(a) com sucesso!`);
            setNome('')
            setEmail('')
            setSenha('')
            setSchoolType('')
        })
        .catch((err) => window.alert(err + "Ocorreu um erro"))
  }

  return (
    <>
      <main className="w-screen h-screen flex items-center justify-center bg-white">
        <section className="flex flex-col items-center">
          <Image
            src={'/assets/ninus_login_logo.png'}
            alt="Logo"
            width={100}
            height={100}
            className="translate-y-2"
          />
          <div className="flex justify-center items-center w-full">
            <form className="card border border-neutral-300 px-14 py-10">
              <h2 className="text-center text-lg text-black">
                Ninus <span className="font-bold">Professor</span>
              </h2>
              <div>
                <input
                  placeholder="Nome"
                  type="text"
                  className="text-sm border border-neutral-300 my-5 p-3 w-full"
                  value={nome}
                  name='nome'
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  type="text"
                  className="text-sm border border-neutral-300 my-5 p-3 w-full"
                  value={email}
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Senha"
                  type="password"
                  className="text-sm border border-neutral-300 my-5 p-3 w-full"
                  value={senha}
                  name='senha'
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div>
                <select id="frutas" name="school_type" className='text-sm border border-neutral-300 my-5 p-3 w-full' value={schoolType} onChange={(e) => setSchoolType(e.target.value)}>
                    <option value="" defaultValue></option>
                    <option value="CEI_PRIVADO">CEI Privado</option>
                    <option value="CEI_PUBLICA">CEI Pública</option>
                    <option value="MEI_PRIVADO">MEI Privado</option>
                    <option value="MEI_PUBLICO">MEI Público</option>
                </select>
              </div>
              <div className="w-full bg-black text-white text-center py-3 my-3 text-sm cursor-pointer hover:bg-neutral-800">
                <button type="submit" onClick={handleSubmit}>Criar</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
