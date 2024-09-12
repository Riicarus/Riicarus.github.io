const n=JSON.parse('{"key":"v-56f988b5","path":"/posts/Java/JDK/java.lang.html","title":"Java.lang 包","lang":"zh-CN","frontmatter":{"date":"2023-03-29T00:00:00.000Z","category":["Java","JDK"],"tag":["Java","JDK","java.lang"],"description":"Java.lang 包 1 Object public class Object { private static native void registerNatives(); static { registerNatives(); } // 返回 调用类 的 被 static synchronized 修饰的 类型擦除对象 public final native Class&lt;?&gt; getClass(); // 返回对象的哈希值, 对 HashMap 进行支持 public native int hashCode(); // 比较对象是否相同, 具有 自反、对称、传递、一致性 // 只有引用的内存地址相同才判定相同 // 如果要重写此方法, 需要同时重写 hashCode 方法, 目的是维持 hashCode 方法的一般约定(相等的对象必须有相同的哈希码) public boolean equals(Object obj) { return (this == obj); } // 返回当前对象的复制对象 // 拷贝要求：实现 Cloneable 接口 // 拷贝方式：浅拷贝 protected native Object clone() throws CloneNotSupportedException; // 返回对象的字符串表示形式, 建议所有类都重写此方法 // 返回 类实例名称@对象哈希码的无符号十六进制表示 public String toString() { return getClass().getName() + \\"@\\" + Integer.toHexString(hashCode()); } // 唤醒在该对象的监视器上等待的(某一个)线程, 进入线程就绪状态 public final native void notify(); // 唤醒在该对象的监视器上等待的所有线程, 进入线程就绪状态 public final native void notifyAll(); // 让线程进入等待状态, 直到被 notify()/notifyAll() 唤醒, 或者超过指定等待时间 public final native void wait(long timeout) throws InterruptedException; // 同上 public final void wait(long timeout, int nanos) throws InterruptedException { if (timeout &lt; 0) { throw new IllegalArgumentException(\\"timeout value is negative\\"); } if (nanos &lt; 0 || nanos &gt; 999999) { throw new IllegalArgumentException( \\"nanosecond timeout value out of range\\"); } if (nanos &gt; 0) { timeout++; } wait(timeout); } // 使线程进入长期等待状态, 直到且只能被 notify()/notifyAll() 唤醒 public final void wait() throws InterruptedException { wait(0); } // 当确定没有对该对象的引用的时候, 由垃圾收集器在对象上进行调用 protected void finalize() throws Throwable { } }","head":[["meta",{"property":"og:url","content":"https://riicarus.github.io/posts/Java/JDK/java.lang.html"}],["meta",{"property":"og:site_name","content":"Riicarus"}],["meta",{"property":"og:title","content":"Java.lang 包"}],["meta",{"property":"og:description","content":"Java.lang 包 1 Object public class Object { private static native void registerNatives(); static { registerNatives(); } // 返回 调用类 的 被 static synchronized 修饰的 类型擦除对象 public final native Class&lt;?&gt; getClass(); // 返回对象的哈希值, 对 HashMap 进行支持 public native int hashCode(); // 比较对象是否相同, 具有 自反、对称、传递、一致性 // 只有引用的内存地址相同才判定相同 // 如果要重写此方法, 需要同时重写 hashCode 方法, 目的是维持 hashCode 方法的一般约定(相等的对象必须有相同的哈希码) public boolean equals(Object obj) { return (this == obj); } // 返回当前对象的复制对象 // 拷贝要求：实现 Cloneable 接口 // 拷贝方式：浅拷贝 protected native Object clone() throws CloneNotSupportedException; // 返回对象的字符串表示形式, 建议所有类都重写此方法 // 返回 类实例名称@对象哈希码的无符号十六进制表示 public String toString() { return getClass().getName() + \\"@\\" + Integer.toHexString(hashCode()); } // 唤醒在该对象的监视器上等待的(某一个)线程, 进入线程就绪状态 public final native void notify(); // 唤醒在该对象的监视器上等待的所有线程, 进入线程就绪状态 public final native void notifyAll(); // 让线程进入等待状态, 直到被 notify()/notifyAll() 唤醒, 或者超过指定等待时间 public final native void wait(long timeout) throws InterruptedException; // 同上 public final void wait(long timeout, int nanos) throws InterruptedException { if (timeout &lt; 0) { throw new IllegalArgumentException(\\"timeout value is negative\\"); } if (nanos &lt; 0 || nanos &gt; 999999) { throw new IllegalArgumentException( \\"nanosecond timeout value out of range\\"); } if (nanos &gt; 0) { timeout++; } wait(timeout); } // 使线程进入长期等待状态, 直到且只能被 notify()/notifyAll() 唤醒 public final void wait() throws InterruptedException { wait(0); } // 当确定没有对该对象的引用的时候, 由垃圾收集器在对象上进行调用 protected void finalize() throws Throwable { } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-26T12:54:06.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JDK"}],["meta",{"property":"article:tag","content":"java.lang"}],["meta",{"property":"article:published_time","content":"2023-03-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-26T12:54:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java.lang 包\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-26T12:54:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 Object","slug":"_1-object","link":"#_1-object","children":[]},{"level":2,"title":"2 String","slug":"_2-string","link":"#_2-string","children":[{"level":3,"title":"2.1 基础","slug":"_2-1-基础","link":"#_2-1-基础","children":[]},{"level":3,"title":"2.2 深入 String","slug":"_2-2-深入-string","link":"#_2-2-深入-string","children":[]}]},{"level":2,"title":"3 AbstractStringBuilder","slug":"_3-abstractstringbuilder","link":"#_3-abstractstringbuilder","children":[]},{"level":2,"title":"4 StringBuilder","slug":"_4-stringbuilder","link":"#_4-stringbuilder","children":[]},{"level":2,"title":"5 StringBuffer","slug":"_5-stringbuffer","link":"#_5-stringbuffer","children":[]},{"level":2,"title":"6 ThreadLocal","slug":"_6-threadlocal","link":"#_6-threadlocal","children":[]}],"git":{"createdTime":1680164006000,"updatedTime":1695732846000,"contributors":[{"name":"Riicarus","email":"riicarus.acc@gmail.com","commits":5}]},"readingTime":{"minutes":25.68,"words":7703},"filePathRelative":"posts/Java/JDK/java.lang.md","localizedDate":"2023年3月29日","excerpt":"<h1> Java.lang 包</h1>\\n<h2> 1 Object</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Object</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">native</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">registerNatives</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">static</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">registerNatives</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 返回 调用类 的 被 static synchronized 修饰的 类型擦除对象</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">native</span> <span class=\\"token class-name\\">Class</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">getClass</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 返回对象的哈希值, 对 HashMap 进行支持</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">native</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">hashCode</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 比较对象是否相同, 具有 自反、对称、传递、一致性</span>\\n    <span class=\\"token comment\\">// 只有引用的内存地址相同才判定相同</span>\\n    <span class=\\"token comment\\">// 如果要重写此方法, 需要同时重写 hashCode 方法, 目的是维持 hashCode  方法的一般约定(相等的对象必须有相同的哈希码)</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Object</span> obj<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span> <span class=\\"token operator\\">==</span> obj<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 返回当前对象的复制对象</span>\\n    <span class=\\"token comment\\">// 拷贝要求：实现 Cloneable 接口</span>\\n    <span class=\\"token comment\\">// 拷贝方式：浅拷贝</span>\\n    <span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">native</span> <span class=\\"token class-name\\">Object</span> <span class=\\"token function\\">clone</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">CloneNotSupportedException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 返回对象的字符串表示形式, 建议所有类都重写此方法</span>\\n    <span class=\\"token comment\\">// 返回 类实例名称@对象哈希码的无符号十六进制表示</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">getClass</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"@\\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toHexString</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">hashCode</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 唤醒在该对象的监视器上等待的(某一个)线程, 进入线程就绪状态</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">native</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">notify</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 唤醒在该对象的监视器上等待的所有线程, 进入线程就绪状态</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">native</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">notifyAll</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 让线程进入等待状态, 直到被 notify()/notifyAll() 唤醒, 或者超过指定等待时间</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">native</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">wait</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">long</span> timeout<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">InterruptedException</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 同上</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">wait</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">long</span> timeout<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> nanos<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">InterruptedException</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>timeout <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">IllegalArgumentException</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"timeout value is negative\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nanos <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">||</span> nanos <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">999999</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">IllegalArgumentException</span><span class=\\"token punctuation\\">(</span>\\n                                <span class=\\"token string\\">\\"nanosecond timeout value out of range\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nanos <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            timeout<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        <span class=\\"token function\\">wait</span><span class=\\"token punctuation\\">(</span>timeout<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 使线程进入长期等待状态, 直到且只能被 notify()/notifyAll() 唤醒</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">wait</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">InterruptedException</span> <span class=\\"token punctuation\\">{</span>\\n     <span class=\\"token function\\">wait</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 当确定没有对该对象的引用的时候, 由垃圾收集器在对象上进行调用</span>\\n    <span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">finalize</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">Throwable</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
