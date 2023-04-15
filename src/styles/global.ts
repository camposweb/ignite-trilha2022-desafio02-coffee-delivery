import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.white};
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type="number"] {
		appearance: textfield;
	}
	
	@media (max-width: 768px) {
	/* 
	16 -> 100%
	14 -> X
	14 * 100 / 16
	
	
	*/
	html {
		font-size: 87.5%;
	}
}
`
