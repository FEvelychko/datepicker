/**
 * Created by Maksym on 11.09.2015.
 */

//debugger;

    /* Best sample of closure */

    var firstFunction  = function(){
        var index = 10;
        return function(){
            return index;
        }
    };

    var out = firstFunction();
    console.log(out());


    function first(){
        var index = 10;
        return function(){
            return index;
        }
    }
    function second(){
        var index = 20;
        //console.log(first()());
        var oldIndex = first()();
        if(index > oldIndex){
            console.log('Bigger');
        }
    }
    second();



    /*var number = null;

    function getNumber(num){
        number = num;
        return number * changeNumber(20);
    }
    function changeNumber(numSecond){
        number = numSecond;
        return number;
    }
    function divideNumber(){
        return getNumber(10) / 5;
    }

    console.log(divideNumber());*/


        /*function DatePicker() {

            this.ulDays = document.querySelector('.ulSecondDays').children;
            this.currentDays = 4;
            for (var x = 0; x <= this.currentDays; x++) {
                this.ulDays[x].innerHTML = "1";
            }

            return this;
        };

        DatePicker.prototype.getPrev = function(){
            delete this.ulDays.lastChild;
            this.currentDays -= 1;
            //alert('asasas');

            for (var x = 0; x <= this.currentDays; x++) {
                this.ulDays[x].innerHTML = "121212";
            }
        };

        DatePicker.prototype.setDate = function(){
            this.btnPrev = document.querySelector('.prev');
            this.btnPrev.addEventListener('click', this.getPrev.bind(this), false);
        };
    var datepicker = new DatePicker();
    datepicker.setDate();*/


        //1. set ul width
        //2. image when click prev/next button

        /*var ul;
        var li_items;
        var imageNumber;
        var imageWidth;
        var prev, next;
        var currentPostion = 0;
        var currentImage = 0;


        function init(){
            ul = document.getElementById('image_slider');
            li_items = ul.children;
            imageNumber = li_items.length;
            imageWidth = li_items[0].children[0].clientWidth;
            ul.style.width = parseInt(imageWidth * imageNumber) + 'px'; // all ul width
            prev = document.getElementById("prev");
            next = document.getElementById("next");
            prev.onclick = function(){ onClickPrev();};
            next.onclick = function(){ onClickNext();};
        }

        function animate(opts){
            var start = new Date;
            var id = setInterval(function(){
                var timePassed = new Date - start;
                var progress = timePassed / opts.duration;
                if (progress > 1){
                    progress = 1;
                }
                var delta = opts.delta(progress);
                opts.step(delta);
                if (progress == 1){
                    clearInterval(id);
                    opts.callback();
                }
            }, opts.delay || 17);
            //return id;
        }

        function slideTo(imageToGo){
            var direction;
            var numOfImageToGo = Math.abs(imageToGo - currentImage);
            // slide toward left

            direction = currentImage > imageToGo ? 1 : -1;
            currentPostion = -1 * currentImage * imageWidth;
            var opts = {
                duration:1000,
                delta:function(p){return p;},
                step:function(delta){
                    ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
                },
                callback:function(){currentImage = imageToGo;}
            };
            animate(opts);
        }

        function onClickPrev(){
            debugger;

            if (currentImage == 0){
                slideTo(imageNumber - 1);
            }
            else{
                slideTo(currentImage - 1);
            }
        }

        function onClickNext(){
            if (currentImage == imageNumber - 1){
                slideTo(0);
            }
            else{
                slideTo(currentImage + 1);
            }
        }*/


       /*var ul;
        var li_items;
        var imageNumber;
        var prev;
        var next;

        function init(){
            ul = document.getElementById('image_slider');
            li_items = ul.children;
            imageNumber = li_items.length;
            prev = document.getElementById("prev");
            next = document.getElementById("next");
            prev.onclick = function(){ onClickPrev();};
            next.onclick = function(){ onClickNext();};
        }

        function onClickNext() {
            li_items[1].innerHTML = "asasasasas";
        }

        window.onload = init;*/










