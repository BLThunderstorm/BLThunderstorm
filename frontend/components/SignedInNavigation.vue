<template>
        <div id="signed-in-navigation-container">
<div id="signed-in-navigation">

<div>Connect your Battlelog account</div>
</div>
</div>
</template>
<style>



#signed-in-navigation {
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: black;
        border-radius: 5px;
        width: 300px;
        padding: 20px;
}

#signed-in-navigation-container {
position: fixed;
height: auto; width: auto;
right: 10px;
top: 90px;
transition-property: display;
display: none;

}

.user-loggedin-header:hover, .user-loggedin-header:active + #signed-in-navigation-container {
display: !unset;
}
</style>