import React from 'react';
import styled from 'styled-components'

const Links = styled.div ``

const links = [
    {
        linkName: 'Home',
        linkHref: '/home'
    },
    {
        linkName: 'Our collection',
        linkHref: '/our-collection'
    },
    {
        linkName: 'Marketplace',
        linkHref: '/marketplace'
    },
    {
        linkName: 'About us',
        linkHref: '/about'
    },
    {
        linkName: 'Contact',
        linkHref: '/contact'
    }
  ]

  const Nav = () => {
    return ( 
        <Links>
        {links.map((link) => (
            <a href={link.linkHref}>
                {link.linkName}
            </a>
            ))
        }
        </Links>
    );
};

export default Nav;