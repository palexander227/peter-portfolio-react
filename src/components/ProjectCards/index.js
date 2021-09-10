import React from 'react'
import initialData from '../../data.js';
import ProjectCard from '../ProjectCard';
import styles from './ProjectCards.module.css';
import { useState } from 'react';

const ProjectCards = () => {
    const [data, setData] = useState(initialData)
    return (
        <div className={styles.containerm}>
            {
                data.projects.map((item, index) => {
                    return (
                        <div key={index}
                            className={styles.card}>
                            <ProjectCard
                                title={item.title}
                                summary={item.summary}
                                repos={item.repos}
                                visitSite={item.visitSite}
                                image={item.image}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectCards
