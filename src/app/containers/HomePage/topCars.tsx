import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopCarsContainer = styled.div`
	${tw`flex flex-col items-center justify-center w-full pl-4 pr-4 mb-10 max-w-screen md:pl-0 md:pr-0`}
`;

const Title = styled.h2`
	${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`;

const CarsContainer = styled.div`
	${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;

export const TopCars = () => {
	return <TopCarsContainer>
		<Title></Title>
		<CarsContainer></CarsContainer>
	</TopCarsContainer>;
};
