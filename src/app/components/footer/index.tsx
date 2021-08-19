import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FooterContainer = styled.div`
	min-height: 30em;
	background-color: #1d2124;
	${tw`flex items-center justify-center min-w-full pt-4 pb-1 md:pt-12`}
`;

const InnerContainer = styled.div`
	${tw`flex flex-col h-full max-w-screen-2xl`}
`;

const AboutContainer = styled.div`
	${tw`flex flex-col`}
`;

function Footer() {
	return (
		<FooterContainer>
			<InnerContainer>
				<AboutContainer>
					<Logo color="white" />
				</AboutContainer>
			</InnerContainer>
		</FooterContainer>
	)
}

export default Footer
