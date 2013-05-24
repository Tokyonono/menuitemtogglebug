var MyLayer = cc.Layer.extend({
    init: function () {
    	
    	// Call super
    	this._super();
    	
    	// Get screen size
    	var screensize = cc.Director.getInstance().getWinSize();
    	
    	// Add background
    	var backgroundcolor = cc.LayerGradient.create(cc.c4b(0,0,0,255), cc.c4b(255,255,0,255), cc.p(0,-1));
    	this.addChild(backgroundcolor);

		// Load sprite sheet
		cc.SpriteFrameCache.getInstance().addSpriteFrames(s_Buttons_Plist);
		
		// Add button
   		var nextoff = cc.Sprite.createWithSpriteFrameName("next.png");
		var nexton = cc.Sprite.createWithSpriteFrameName("next-on.png");
		var nextoffbutton = cc.MenuItemSprite.create(nextoff);
		var nextonbutton = cc.MenuItemSprite.create(nexton);
		var toggler = new cc.MenuItemToggle.create(nextoffbutton, nextonbutton, this.onNext, this);
		toggler.setEnabled(false); // But I can still use the button, it toggles
		
		// Finally: create the menu
		var menu = cc.Menu.create();
		menu.initWithArray([toggler]);
		this.addChild(menu);
		
        return true;
    },
    onNext: function () {
    	cc.log("Toggle");
    }
    
});

var MyScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});
