import { GalleryService } from './../../services/gallery.service';
import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Picture } from '../../models/Picture';
import { ActivatedRoute } from '@angular/router';
import { Scrollable } from '../../../../shared/ScrollablePage';
import { Category } from '../../models/Category';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent extends Scrollable implements OnInit, AfterViewInit {
  public pictures: Picture[];
  public categories: Category[];

  constructor(private route: ActivatedRoute, private galleryService: GalleryService) {
    super();
    this.pictures = this.route.snapshot.data['picturesConfiguration'].pictures.map((picture) => {
      return {
        name: picture.name,
        categories: this.galleryService.buildFilter(picture)
      }
    });
    this.categories = this.route.snapshot.data['picturesConfiguration'].categories;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.lazyLoadPicturesPreview();
    this.activePreviewOnPictures();
    this.initScrollbar();
  }

  private lazyLoadPicturesPreview(): void {
    $("img.lazy").lazyload({
      threshold: 200,
      effect: "fadeIn",
      container: $(".inner-wrapper"),
      skip_invisible: true,
      failure_limit: 100
    });
  }

  private activePreviewOnPictures(): void {

    function masonry_init(selector, item) {

      selector.isotope({
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: item
        }
      });
    }

    if ($(".gallery-images.grid").length > 0) {

      $(".gallery-images img").each(function (index, el) {

        var o_width = $(this).attr('data-width'),
          o_height = $(this).attr('data-height'),
          c_width = $(this).width();

        $(this).height(c_width * o_height / o_width);
      });
      masonry_init($(".gallery-images .images"), ".img");
    }

    // Images
    if ($(".gallery-images").length > 0) {

      // Filters
      $(".gallery-images .filters a").click(function (event) {
        event.preventDefault();
        var target = $(this).attr('data-filter'),
          style = $(this).parent().attr('data-style') || 'fade';

        if (!$(this).hasClass('active')) {

          if (style == "scale") {
            $(".gallery-images .images").isotope({ filter: target }).on('layoutComplete',
              function (event, laidOutItems) {
                $(window).resize();
              }
            );
          }
          else {
            if (target == "*") {

              $(".gallery-images").removeClass('filtered');
              $(".gallery-images .img.active").removeClass('active');
            }
            else {


              $(".gallery-images").addClass('filtered');
              $(".gallery-images .img.active").removeClass('active');

              $(".gallery-images .img" + target).addClass('active');
            }
          }

          $(".gallery-images .filters a.active").removeClass('active');
          $(this).addClass('active');
        }
      });

      // Love icon
      $(".gallery-images .img .love").click(function (event) {
        event.preventDefault();

        if ($(this).is(':visible')) {

          var id = $(this).parent().find('a').attr('href');

          if ($(this).parent().find('.preview-2').length > 0) {
            id = $(this).parent().find('.preview-2').attr('href');
          }
          if ($(".gallery-images").hasClass('style-title')) {
            id = $(this).parent().find('a').attr('href');
          }

          $(this).next().fadeIn(200, function () {
            $(this).prev().fadeOut(100);
            $.cookie(id, 1, { expires: 1000 });
          });
        }
      });

      $(".gallery-images .img").each(function (index, el) {

        var id = $(this).find('.overlay .preview').attr('href'),
          love = $(this).find('.love');

        if ($(this).find('.preview-2').length > 0) {
          id = $(this).find('.preview-2').attr('href');
        }
        if ($(".gallery-images").hasClass('style-title')) {
          id = $(this).find('.overlay a').attr('href');
        }

        if (typeof $.cookie(id) !== 'undefined') {

          love.next().fadeIn(200, function () {
            love.fadeOut(100);
          });
        }
      });

      $(".gallery-images .img .love-2").click(function (event) {
        event.preventDefault();

        var id = $(this).parent().find('.preview').attr('href'),
          love = $(this).prev();

        if ($(this).parent().find('.preview-2').length > 0) {
          id = $(this).parent().find('.preview-2').attr('href');
        }
        if ($(".gallery-images").hasClass('style-title')) {
          id = $(this).parent().find('a').attr('href');
        }

        if (typeof $.cookie(id) !== 'undefined') {

          if ($.removeCookie(id)) {
            $(this).fadeOut(100, function () {
              love.fadeIn(200);
            });
          }
        }
      });

      $(".gallery-images .img .preview-2, .gallery-images .img .preview-3").magnificPopup({

        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        preloader: true,

        gallery: {
          enabled: true,
          navigateByImgClick: true,
          arrowMarkup: '<button title="%title%" type="button" class="arrow-%dir%"></button>', // markup of an arrow button
          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          tCounter: '<span class="mfp-counter">%curr% sur %total%</span>' // markup of counter
        }
      });

      // On Image Click
      $(".gallery-images .img a.img-cont").magnificPopup({

        type: 'iframe',
        closeOnContentClick: false,
        mainClass: 'mfp-fade',
        preloader: true,
        iframe: {
          markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',

          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: '//www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }
          },
          srcAction: 'iframe_src',
        }
      });

      $(".gallery-images .img .preview").magnificPopup({

        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        preloader: true,

        gallery: {
          enabled: true,
          navigateByImgClick: true,
          arrowMarkup: '<button title="%title%" type="button" class="arrow-%dir%"></button>', // markup of an arrow button
          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          tCounter: '<span class="mfp-counter">%curr% sur %total%</span>' // markup of counter
        }
      });

      $(".gallery-images.style-title .img .overlay a:not('.video')").magnificPopup({

        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        preloader: true,

        gallery: {
          enabled: true,
          navigateByImgClick: true,
          arrowMarkup: '<button title="%title%" type="button" class="arrow-%dir%"></button>', // markup of an arrow button
          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          tCounter: '<span class="mfp-counter">%curr% sur %total%</span>' // markup of counter
        }
      });

      $(".gallery-images.style-title .img .overlay a.video").magnificPopup({

        type: 'iframe',
        closeOnContentClick: false,
        mainClass: 'mfp-fade',
        preloader: true,
        iframe: {
          markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',

          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: '//www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }
          },
          srcAction: 'iframe_src',
        }
      });
    }
  }
}