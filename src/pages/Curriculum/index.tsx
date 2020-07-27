import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import icon from '../../assets/men.svg';
import './styles.css';

import Links from '../../components/Links';
import Objectives from '../../components/Objectves';
import Formations from '../../components/Formations';
import Qualifications from '../../components/Qualifications';
import About from '../../components/About';

const Curriculum = () => {
    const [selectedTopic, setSelectedTopic] = useState<string>('');
    const [component, setComponent] = useState<JSX.Element>();
    const AllTopics = [
        'Links e contatos',
        'Objetivos',
        'Sobre mim', 
        'Formações e certificados',
        'Principais qualificações'

    ]
    useEffect(() => {
        if (selectedTopic === 'Links e contatos') {
            setComponent(Links);
        } else if (selectedTopic === 'Objetivos') {
            setComponent(Objectives);
        } else if (selectedTopic === 'Sobre mim') {
            setComponent(About);
        } else if (selectedTopic === 'Formações e certificados') {
            setComponent(Formations);
        } else if (selectedTopic === 'Principais qualificações') {
            setComponent(Qualifications);
        }
    }, [selectedTopic]);
    function handleSelectedTopic(event: ChangeEvent<HTMLSelectElement>) {
        const selected = event.target.value;
        setSelectedTopic(selected);
    }
    return (
        <div id="page-curriculum">
            <header>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>
            <form>
                <h1>Hiago Murilo Lima Indalecio</h1>
                <h3>Brasileiro, Solteiro, 19 anos.</h3>
                <img src={icon} alt=""/>
                <fieldset>
                    <legend>
                        <h2>Interaja!</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="topic">Tópico</label>
                        <select name="topic" id="topic" value={selectedTopic} onChange={handleSelectedTopic}>
                            <option value="0">Selecione um tópico.</option>
                            {AllTopics.map(topic => (
                                <option key={topic} value={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                {
                    component
                }
            </form>
        </div>
    );
}

export default Curriculum;