import './styles.css';

interface LinkProps {
    title: string;
    linkTo: string;
    color: string;
    icon: string;
}

export const Link = (props: LinkProps) => {
    return (
        <div className='link'>
            <a href={props.linkTo}>
            <div className='link-background' style={{ background: props.color }}>
                <div className='link-container'>
                    <h3 className='link-title'>{props.title}</h3>
                    <img alt='logo icon' className='link-icon' src={props.icon} />
                </div>
            </div>
            </a>
        </div>
    )
}