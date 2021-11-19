import React from 'react'
import styles from './About.module.css';
import Image from 'next/image'

const About = () => {
    const imageLoader = ({src, width, quality}) => {
        return `https://portfolio-react-2021.s3.us-west-1.amazonaws.com/images/${src}`;
    };
    return (
        <div className={styles.container}>
            <Image  height={251} width={584} src={'https://portfolio-react-2021.s3.us-west-1.amazonaws.com/images/peter-about.jpg'} alt="Peter" />
            <div className={styles.card}>
                <h2>Peter Alexander - CIO &amp; Director of Education</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam risus, accumsan a elit ut, dignissim fringilla quam. Curabitur aliquet sapien urna, ac tempus risus feugiat in. Sed eget ultrices ipsum, eu rhoncus nibh. Etiam aliquet lacinia mollis. Nulla arcu eros, aliquet eu placerat vel, vulputate tincidunt mi. Maecenas facilisis erat ac efficitur tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam pulvinar placerat nibh sit amet sagittis. Aliquam eu risus sit amet neque efficitur ultrices eu sed justo. Aliquam eu congue massa, at mollis odio. Curabitur rutrum sagittis sagittis. Curabitur consequat nibh non pretium porta. In dignissim enim libero, a egestas urna viverra ac. Donec semper nibh in massa eleifend, in cursus urna tempus. Maecenas rhoncus fermentum leo quis vestibulum.
                </p>
                <p>
                    Mauris blandit sapien sit amet orci ornare maximus. Suspendisse at magna placerat, commodo ligula vel, lobortis libero. Integer mattis sit amet lorem id euismod. Sed bibendum nisi vel ex ullamcorper scelerisque. Ut in purus rutrum, porta nibh et, posuere justo. Nullam placerat lacus sit amet tellus imperdiet convallis a at nibh. Nunc id massa sit amet velit luctus suscipit. Duis bibendum lacus vitae elit luctus, ut gravida eros pulvinar. Sed rutrum ipsum at aliquam euismod. Aliquam convallis lectus vel ligula mattis, ac feugiat elit ornare. Praesent dignissim eros vitae elit posuere vehicula. Phasellus sit amet faucibus urna. Vestibulum bibendum diam vitae condimentum tempus. Nulla tellus odio, cursus a erat vel, suscipit iaculis nisi. Nulla interdum sapien eget euismod dignissim.
                </p>
                <p>
                    Praesent pellentesque elit efficitur erat suscipit malesuada. Nam vulputate turpis nec risus sollicitudin varius. Praesent et ante nec sem sagittis semper. Quisque consequat lectus eget diam iaculis auctor. Sed id lorem nisi. In hac habitasse platea dictumst. Mauris luctus porttitor leo at auctor. Fusce at ligula scelerisque, condimentum sem at, ultrices ligula. Sed porttitor ligula ut bibendum sodales. Etiam pharetra justo turpis, nec blandit lorem lacinia eget.
                </p>
            </div>
        </div>
    )
}

export default About
