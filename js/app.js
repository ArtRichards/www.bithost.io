$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip({'placement': 'top'});

    $('.collapse').on('show.bs.collapse', function() {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    $('.collapse').on('hide.bs.collapse', function() {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });

    $('.sure').on('click', function() {

        var link = $(this);
        var message = $(this).data('message') || 'Are you sure?';

        bootbox.confirm(message, function(result) {
            if (result) {
                window.location.href = link.attr('href');
            }
        });

        event.preventDefault();
        return false;
    });

});

var bithost = {

}
