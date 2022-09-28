import NextLink from 'next/link';
import Style from './style';

export default function Link() {
    const URL = 'https://https://www.linkedin.com/in/elmo-braun-b34873169/';
    return (
        <Style>
            <NextLink href={URL} passHref>
                <a href={URL}>Conheça o dev</a>
            </NextLink>
        </Style>
    );
}
