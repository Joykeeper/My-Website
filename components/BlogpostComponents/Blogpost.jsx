import Link from 'next/link'
import styles from './Blogpost.module.css'
import Image from 'next/image'
import BackToTopButton from './BackToTopButton'

const Blogpost = ({name, text_array, image_urls_and_captions}) => {


    let images_index = -1
    let finished_text = text_array?.map((paragraph)=>{

        if (paragraph == 'img_in_here'){
            images_index +=1
            return (
            <>
                <br/>
                <figure className={styles.img_figure}>
                <img src={image_urls_and_captions[images_index][0]} alt={images_index} />
                <figcaption>
                    {image_urls_and_captions[images_index][1]}
                </figcaption>
                </figure>
                
                <br/>
            </>)
        } else if ('header_type' in paragraph){
            switch (paragraph.header_type){
                case 'h1':
                    return <h1>{paragraph.text}</h1>
                case 'h2':
                    return <h2>{paragraph.text}</h2>
                case 'h3':
                    return <h3>{paragraph.text}</h3>
            }
        } else {
            let par = paragraph.map((p)=>{
                return <>{p}<br/></> 
            })
            return <p>{par}</p>
        }

    })
    
    return (
    <div className={styles.blogpost}>
        <BackToTopButton />
        <h1>{name}</h1>
        <div className={styles.content}>{finished_text}</div>
        <Link href={'/blog'} className={styles.back_to_blog}>Back to Blog</Link>
    </div>
    )
}

export default Blogpost