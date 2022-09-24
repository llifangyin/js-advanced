(function() {

    console.log('这是开始');
  
    setTimeout(function cb() {
      console.log('这是来自第一个回调的消息');
    });
  
    console.log('这是一条消息');
  
    setTimeout(function cb1() {
      console.log('这是来自第二个回调的消息');
    }, 0);
  
    console.log('这是结束');
  
  })();
  
  // "这是开始"
  // "这是一条消息"
  // "这是结束"
  // "这是来自第一个回调的消息"
  // "这是来自第二个回调的消息"
  