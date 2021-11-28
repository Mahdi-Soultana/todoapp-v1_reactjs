import { createGlobalStyle } from "styled-components";
export const GlobaleStyles = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html{
    font-size:62.5%;
}

body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #efefef;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
img{
     width:100%;
     height:100%;
     display:inline-block;
     vertical-align: center;
     object-fit: cover;
}
ul {
     list-style: none;
}
a {
     text-decoration: none;
     color: inherit;
}
.container{
    max-width:1000px;
    width:100%;
    margin:0 auto;
}
button:hover{
    opacity:.6;

}
h2{
    text-align:center;
}
button {
    text-transform: capitalize;


}
      `;
