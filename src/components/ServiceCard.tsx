import React from 'react'
import styles from './ServiceCard.module.css'

export interface Props {
	children: React.ReactNode
    title: string
    description: string
    link: string
}

const ServiceCard = ({children, title, description, link}:Props) => {
    return (
        <article className={styles.service}>
            {children}
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}><button>Ver</button></a>
        </article>
    )
}

export default ServiceCard