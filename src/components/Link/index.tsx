import NextLink from 'next/link';
import Style from './style';

export default function Link() {
    const URL = 'https:www.linkedin.com/in/elmo-braun-Dev';
    return (
        <Style>
            <NextLink href={URL} passHref>
                <a href={URL}>Conheça o dev</a>
            </NextLink>
        </Style>
    );
}
