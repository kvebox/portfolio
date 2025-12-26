import './styles.css';

interface LinkProps {
    title: string;
    linkTo?: string;
    color: string;
    hover?: string;
    icon: string;
}

export const Link = (props: LinkProps) => {
    return (
        <div className='link'>
            <a href={props.linkTo}>
            <div style={{ background: props.color }} className='link-background'>
                <div className='link-container'>
                    <h3 className='link-title'>{props.title}</h3>
                    <img alt='logo' className='link-icon' src={props.icon} />
                </div>
            </div>
            </a>
        </div>
    )
}

