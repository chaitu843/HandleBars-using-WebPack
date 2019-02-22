import '../../node_modules/jquery/dist/jquery.min';
import template from '../hbs/character-list.hbs';
import $ from 'jquery';

$(document).ready(() => {
    $.ajax('src/json/cast.json').done((data) => {
        let temp = template(data);
        $('.character-list').html(temp);
    })
})
