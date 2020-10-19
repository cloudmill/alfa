class ParalaxItem {
  constructor(opts) {
    this.parent = opts.parent;
    this.child = opts.child;
    this.duration = 1.9;
    this.way = 200;
    this.hook = opts.hook || 0.8;
    this.offset = this.parent.hasClass("size-box") ? "-50%" : "0";
  }
  update(y) {
    this.startPos = this.parent.offset().top * this.hook;
    this.endPos = this.startPos + window.innerHeight * this.duration;
    if (y - this.startPos >= 0 && this.endPos - y >= 0) {
      this.currentOffset =
        (this.way / (this.endPos - this.startPos)) * (y - this.startPos);
      this.child.css(
        "transform",
        "translate3d(" + this.offset + "," + this.currentOffset + "px,0)"
      );
    } else if (y - this.startPos < 0) {
      this.child.css("transform", "translate3d(" + this.offset + ",0,0)");
    } else if (this.endPos - y < 0) {
      this.child.css(
        "transform",
        "translate3d(" + this.offset + "," + this.way + "px,0)"
      );
    }
  }
}

const paralaxItems = [];
$(".parallax-box").each(function () {
  paralaxItems.push(
    new ParalaxItem({
      parent: $(this),
      child: $(this).find(".parallax-item"),
      hook: $(this).attr("data-hook"),
    })
  );
});

$(window).scroll(() => {
  const scrollPos = $(document).scrollTop();
  paralaxItems.forEach((item) => {
    item.update(scrollPos);
  });
});

