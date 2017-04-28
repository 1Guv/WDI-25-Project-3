window.addEventListener('message', getMessage, false);

function getMessage(message) {
  var data = message.data;

	if (message.origin.indexOf('caranddriver.com') == -1) return;

  // Resize
  if (typeof data['resize'] !== 'undefined') {
    var frame = data['resize']['frame'];
    var height = data['resize']['height'];

    if (parseInt(height) > 0) {
      document.getElementById(frame).height = parseInt(height);
    }
  }

  // User bar nav
  if (typeof data['callback'] !== 'undefined') {
    eval(data['callback']);
  }
}

function getScript(source, callback) {
  var script = document.createElement('script');
  var prior = document.getElementsByTagName('script')[0];
  script.async = 1;
  prior.parentNode.insertBefore(script, prior);

  script.onload = script.onreadystatechange = function( _, isAbort ) {
    if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
      script.onload = script.onreadystatechange = null;
      script = undefined;

      if(!isAbort) { if(callback) callback(); }
    }
  };

  script.src = source;
}

function load_parent(parent_id, id_name) {
  var parent = document.getElementById(parent_id);

  if (parent) {
    var merge_div = document.createElement('div');
    merge_div.id = id_name;
    parent.appendChild(merge_div);
  } else {
    document.write('<div id="' + id_name + '"></div>');
    var merge_div = document.getElementById(id_name);
  }

  return merge_div;
}

function load_comments_frame(id_name, src, width, height, parent_id) {
  var merge_div = load_parent(parent_id, id_name);

  if (merge_div) {
    merge_div.innerHTML = '<iframe src="'+src+'" width="'+width+'" height="'+height+'" id="merge_frame" name="merge_frame" allowTransparency="true" frameBorder="0" scrolling="no" style="background-color: transparent; width: 320px; min-width: 100%;"></iframe>';
  }
}

function merge_comments(merge_source, parent_id) {
  console.log('new comment api');
  if (merge_source && document.getElementById('merge_comments') == null) {
    if (merge_source.url && merge_source.url != '') {
      var url = merge_source.url;
    } else {
      var url = window.location.href;
    }

    var title = '', summary = '', content_type = '', content_id = '', tags = '', forum = '', img_small = '', section_name = '', locked = '', src = '', api_version = '', top_only = '';

    if (merge_source.title && merge_source.content_type && merge_source.content_id && merge_source.forums) {
      if (merge_source.title) var title = '&title=' + encodeURIComponent(merge_source.title);
      if (merge_source.summary) var summary = '&summary=' + encodeURIComponent(merge_source.summary);
      if (merge_source.content_type) var content_type = '&content_type=' + encodeURI(merge_source.content_type);
      if (merge_source.content_id) var content_id = '&content_id=' + encodeURI(merge_source.content_id);
      if (merge_source.tags) var tags = '&tags=' + encodeURI(merge_source.tags);
      if (merge_source.forums) var forum = '&forum=' + encodeURI(merge_source.forums);
      if (merge_source.img_small) var img_small = '&img_small=' + encodeURIComponent(merge_source.img_small);
      if (merge_source.section) var section_name = '&section=' + encodeURI(merge_source.section);
      if (merge_source.locked) {
        var locked = '&locked=' + encodeURI(merge_source.locked);
      }
      if (merge_source.top_only) var top_only = '&top_only=' + encodeURI(merge_source.top_only);
      var src = '&src=' + encodeURIComponent(url);

      if (merge_source.height) {
        var height = merge_source.height;
      } else {
        var height = 250;
      }

      if (document.getElementById('backfires-user-bar') == null) {
        api_version = '&api=1';
      }

      load_comments_frame('merge_comments','http://api.backfires.caranddriver.com/forum_posts/find_or_create?format=iframe' + title + summary + content_type + content_id + tags + forum + img_small + section_name + locked + top_only + src + api_version, '100%', height, parent_id);

      var merge_div = document.getElementById('merge_comments');
    }
  }
}

function backfires_user_nav(parent_id) {
  var parent = '';
  if (parent_id == undefined) var parent_id = '';
  if (parent_id != '') parent = '&parent_id='+parent_id;

  getScript('http://api.backfires.caranddriver.com/account/user_bar_nav?api=2&format=js' + parent);
}

function backfires_api_reload() {
  backfires_user_nav();

  var comment_frame = document.getElementById('merge_frame');
  comment_frame.src = comment_frame.src;
}

function backfires_logout() {
  getScript('http://api.backfires.caranddriver.com/logout.json', backfires_api_reload);
}

function show_popup(url) {
  var width = 425;
  var height = 550;
  var top = (screen.height / 2) - (height / 2);
  var left = (screen.width / 2) - (width / 2);

  share_popup = window.open(url, 'backfires', 'toolbar=0,location=0,statusbar=0,menubar=0,scrollbars=1,resizable=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
}

