# see the repo here https://github.com/imagemin/imagemin-cli #
# you need to install the CLI before running this script     #
# npm install --global imagemin-cli                          #
imagemin public/pictures/about\ us/* --plugin=mozjpeg --out-dir=public/compressed_pictures/about\ us
# imagemin public/pictures/about\ us/* --plugin.mozjpeg.quality=75 --out-dir=public/compressed_pictures/about\ us
imagemin public/pictures/carousel/* --plugin=mozjpeg --out-dir=public/compressed_pictures/carousel
imagemin public/pictures/contact\ us/* --plugin=mozjpeg --out-dir=public/compressed_pictures/contact\ us
imagemin public/pictures/industries\ \&\ applications/* --plugin=pngquant --out-dir=public/compressed_pictures/industries\ \&\ applications
imagemin public/pictures/principles/* --plugin=pngquant --out-dir=public/compressed_pictures/principles
imagemin public/pictures/products/* --plugin=mozjpeg --out-dir=public/compressed_pictures/products
imagemin public/pictures/quotes/* --plugin=mozjpeg --out-dir=public/compressed_pictures/quotes
imagemin public/pictures/services/* --plugin=mozjpeg --out-dir=public/compressed_pictures/services
imagemin public/pictures/main_adp.jpg --plugin=mozjpeg --out-dir=public/compressed_pictures