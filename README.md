# porbiota_bs
Bootstrap subtheme for the PORBIOTA institutional site

This is a bootstrap subtheme for Drupal 8.
## Requirements
To work, this subtheme needs the Drupal Bootstrap theme to be installed and enabled

## Install

1. Copy/clone to the theme folder in your drupal installation
2. In /admin/appearance, activate porbiota_BS theme to be enabled and default


# Basic configuration of drupal

## Add language support
  1. In ```admin/config/regional/language```, add ***Portuguese, Portugal***
  2. In ```admin/modules``` activate ***Content Translation***
  3. Configure ***Content Translation*** to identify which content to be translatable


## Create image styles with width x height, scale and crop (admin/config/media/image-styles)
  - Slideshow 2048x800
  - RecursosServicos-Front 270x360
  - Noticias-Front 380x500
  - ContentDetail 800x650

## Add display modes
  1. In ```admin/structure/display-modes/view``` add ***Frontpage***

## Add custom date formats
  1. add ***day***,```d```
  2. add ***month_pt***,```M```
  2. add ***data noticia frontpage***,```d.M.Y```

## Add vocabulary
  1. In ```admin/structure/taxonomy/add``` add ***tags recursos*** with these values and their translation:
  - Bibliografia
  - Artigos científicos
  - Documentos
  - Outros
  - Software

## Add content types
  In ```admin/structure/types```,
  1. Edit ***Basic page*** to add ```field_image``` as ***ContentDetail***
  2. Add ***Eventos*** with the fields
    - Body
    - date of Eventos
    - Eventos image
    - Eventos tags
    - Eventos venue
  3. Add ***Noticias*** with the fields
    - Body
    - date of Eventos
    - Eventos image
    - Eventos tags
    - Eventos venue    

## Add Bootstrap Library and Theme
  1. Run ```composer require drupal/bootstrap_library```
  2. Run ```composer require drupal/bootstrap```
  3. Configure Bootstrap Library to use a local library
  - Create directory ```libraries```
  - - Download bootstrap and place in this folder, with the name bootstrap

## Add Fontawesome
  1. Download and place on folder libraries (TODO: check if necessary)
  2. Run ```composer require drupal/fontawesome```

## Add bootstrap subtheme porbiota_bs
  1. Clone this repository to themes/contrib: ```composer require drupal/bootstrap_library```
  2. Configure the subtheme CDN and logo image

## Add Views Bootstrap
  1. Run ```composer require drupal/views_bootstrap```

## General settings
  1. In ```admin/config/system/site-information``` add
  - site name: PORBIOTA
  - set frontpage blank
  2. In ```admin/config/search/pages```
  - disable users in ***search pages***
