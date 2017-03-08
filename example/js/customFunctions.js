$(document).ready(function () {
    $.fn.extend({
        select2Ajax: function () {
            //O retorno deve ser um Array JSON com id e text
            //[{"id": 123,"text": "texto1"}, {"id": 124,"text": "texto2"}]

            urlPesquisa = $(this).data('url');
            placeholder = $(this).data('placeholder');
            limiteCaracteres = $(this).data('limiteCaracteres');

            if(limiteCaracteres == null || limiteCaracteres == undefined) limiteCaracteres = 9;
            if(urlPesquisa != null && urlPesquisa != undefined) {
                for(var i = 0; i < 2; i++) {    //resolução do bug de reload caso a página seja recarregada dinamicamente
                    $(this).each(function () {
                        $(this).select2Reset();

                        if($(this).prop('multiple')) {  //parametrização caso seja um select multiplo

                            var ph = placeholder;
                            if(placeholder == null || placeholder == undefined) ph = "Selecione um ou mais valores";
                            var select = $(this);
                            $(this).select2({
                                placeholder: ph,
                                language: "pt-BR",
                                allowClear: true,
                                multiple: true,
                                minimumInputLength: 0,
                                minimumResultsForSearch: 10,
                                ajax: {
                                    url: urlPesquisa,
                                    dataType: "json",
                                    type: "POST",
                                    data: function (params) {
                                        var queryParameters = {
                                            pesquisa: params.term
                                        }
                                        return queryParameters;
                                    },
                                    processResults: function (data) {
                                        return {results: data};
                                    }
                                },
                                templateSelection: function (data) {
                                    var txt = '';
                                    $(select).find('option').each(function () {
                                        if($(this).prop('value') == data.id){
                                            txt = $(this).text();
                                            return false;
                                        }
                                    });
                                    if (txt.length > limiteCaracteres) txt = txt.substring(0, limiteCaracteres) + '...';
                                    return txt;
                                }
                            });
                        } else{                         //parametrização caso seja um select simples
                            var ph = placeholder;
                            if(placeholder == null || placeholder == undefined) ph = "Selecione um valor";
                            $(this).select2({
                                placeholder: ph,
                                language: "pt-BR",
                                allowClear: true,
                                multiple: false,
                                minimumInputLength: 0,
                                minimumResultsForSearch: 10,
                                ajax: {
                                    url: urlPesquisa,
                                    dataType: "json",
                                    type: "POST",
                                    data: function (params) {
                                        var queryParameters = {
                                            pesquisa: params.term
                                        }
                                        return queryParameters;
                                    },
                                    processResults: function (data) {
                                        return {results: data};
                                    }
                                }
                            });
                        }
                    });
                }
            } else{
                $(this).html($('<option value=""></option>').text('Adicione uma Url para pesquisa AJAX!')).show().parent().find('div.bootstrap-select').remove();
            }
        },
        select2Simple: function (placeholder, search) {
            if(placeholder == null) placeholder = "Selecione";
            search == null ? search = 1 : search = Infinity;
            for(var i = 0; i < 2; i++) {
                $(this).each(function () {
                    var multiple = $(this).prop('multiple');
                    $(this).select2Reset();
                    $(this).select2({
                        placeholder: placeholder,
                        language: "pt-BR",
                        multiple: multiple,
                        minimumResultsForSearch: search
                    });
                });
            }
        },
        select2Reset: function () {
            if ($(this).hasClass('select2-hidden-accessible')) $(this.selector).select2('destroy');
            $(this).show().parent().find('*').not('select,option').remove();
        }
    });
});