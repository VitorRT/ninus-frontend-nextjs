"use client";

import Image from 'next/image';
import React,{useState, useEffect} from 'react';

export default function CreateClassPage({ account }) {

    const [eixo, setEixo] = useState('');
    const [turma, setTurma] = useState('');
    const [recursosDidaticos, setRecursosDidaticos] = useState('');
    const [tipoDeEnsino, setTipoDeEnsino] = useState('');
    const [objetivoAprendizagem, setObjetivoAprendizagem] = useState('')
    const [temaAula, setTemaAula] = useState('')
    const [objetivoDeAula, setObjetivoDeAula] = useState('');
    const [campoExperiencia, setCampoExperiencia] = useState('');
    const [tempoDeAula, setTempoDeAula] = useState(0);
    const [client, setClient] = useState({
        id: 1,
        name: "",
        school_type: ""
      } );

    useEffect(() => {
        if (account) {
            setClient({
                id: account.id || 1, 
                name: account.name || "",
                school_type: account.school_type || ""
            });
        }
    }, [account])

    const dadosInput = {
        "class_ninus_id": client["id"],
        "axle": eixo,
        "class_room": turma,
        "didatic_resources": recursosDidaticos,
        "type_teaching": tipoDeEnsino,
        "learning_objective": objetivoAprendizagem,
        "class_theme": temaAula,
        "class_objective": objetivoDeAula,
        "fields_experience": campoExperiencia,
        "duration_in_minutes": tempoDeAula
    }

    const cadastroAulas = (event) => {
        event.preventDefault()
        api.post('api/v1/class/input', dadosInput)
            .then(() => {
                window.alert("Dados cadastrados com sucesso");
                setEixo('');
                setTurma('');
                setRecursosDidaticos('');
                setTipoDeEnsino('');
                setObjetivoAprendizagem('');
                setTemaAula('');
                setObjetivoDeAula('');
                setCampoExperiencia('');
                setTempoDeAula('');
            })
            .catch((err) => {
                window.alert(err + "Deu erro ao cadastrar")
            })
    }

    return (
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
                    Cadastre sua <span className="font-bold">Aula</span>
                </h2>
                <div>
                    <input
                    placeholder="Eixo da aula..."
                    type="text"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={eixo}
                    name='axle'
                    onChange={(e) => setEixo(e.target.value)}
                    />
                </div>
                <div>
                    <input
                    placeholder="Turma de aula..."
                    type="text"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={turma}
                    name='class_room'
                    onChange={(e) => setTurma(e.target.value)}
                    />
                </div>
                <div>
                    <input
                    placeholder="Recursos didáticos..."
                    type="text"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={recursosDidaticos}
                    name='resources_didatics'
                    onChange={(e) => setRecursosDidaticos(e.target.value)}
                    />
                </div>
               
                <div>
                    <input
                    placeholder="Tipo de ensino..."
                    type="text"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={tipoDeEnsino}
                    name='type_teaching'
                    onChange={(e) => setTipoDeEnsino(e.target.value)}
                    />
                </div>
               
                <div>
                    <input
                    placeholder="Objetivo de aprendizagem..."
                    type="text"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={objetivoAprendizagem}
                    name='learning_objective'
                    onChange={(e) => setObjetivoAprendizagem(e.target.value)}
                    />
                </div>

                <div>
                    <input
                    placeholder="Tema da aula..."
                    type="text"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={temaAula}
                    name='class_theme'
                    onChange={(e) => setTemaAula(e.target.value)}
                    />
                </div>

                <div>
                    <input
                    placeholder="Objetivo de aula..."
                    type="text"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={objetivoDeAula}
                    name='objective_class'
                    onChange={(e) => setObjetivoDeAula(e.target.value)}
                    />
                </div>


                <div>
                    <input
                    placeholder="Campos de experiência..."
                    type="text"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={campoExperiencia}
                    name='fields_experience'
                    onChange={(e) => setCampoExperiencia(e.target.value)}
                    />
                </div>

                <div>
                    <input
                    placeholder="Duração de aula em minutos..."
                    type="number"
                    className="text-sm border border-neutral-300 my-5 p-3 w-full"
                    value={tempoDeAula}
                    name='duration_in_minutos'
                    onChange={(e) => setTempoDeAula(e.target.value)}
                    />
                </div>
               
                <div className="w-full bg-black text-white text-center py-3 my-3 text-sm cursor-pointer hover:bg-neutral-800">
                    <button type="submit" onClick={cadastroAulas}>Criar</button>
            
                </div>
                </form>
            </div>
        </section>
      </main>
    )
}