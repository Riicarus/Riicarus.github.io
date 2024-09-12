import{_ as a,V as t,W as e,X as n,Y as s,$ as p}from"./framework-c6791857.js";const o={},c=n("h1",{id:"lru",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lru","aria-hidden":"true"},"#"),s(" LRU")],-1),i=n("p",null,"LRU(Least Recent Used), 是一种缓存置换算法, 当需要置换时, 将最近最少使用的元素置换出缓存.",-1),l=n("p",null,[s("如果是 Java 的话, 可以直接继承 "),n("code",null,"LinkedHashMap"),s(", 修改 "),n("code",null,"removeOldest()"),s(" 方法即可. Go 中没有这个实现, 可以自己通过 "),n("code",null,"map"),s(" 和 双向链表实现一个 "),n("code",null,"LinkedHashMap"),s(". 用这种方法实现的 LRU 算法, 读写的时间复杂度都为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mn",null,"1"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(1)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"1"),n("span",{class:"mclose"},")")])])]),s(", 空间复杂度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s(".")],-1),u=p(`<p>算法中, 主要的操作其实是双向列表中节点的添加与删除. 针对 LRU 的部分, 则是每次添加或者更新都将添加/修改的节点放到头节点, 这样最近最少使用的节点自然是在尾节点. 同时, 如果容量已满, 就需要进行置换, 删除尾节点.</p><p>以下为 go 实现的 LRU:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> LRUCache <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    capacity <span class="token builtin">int</span>
    size     <span class="token builtin">int</span>
    cache    <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>BiLinkedNode
    head     <span class="token operator">*</span>BiLinkedNode
    tail     <span class="token operator">*</span>BiLinkedNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewLRUCache</span><span class="token punctuation">(</span>capacity <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>LRUCache <span class="token punctuation">{</span>
    cache <span class="token operator">:=</span> <span class="token operator">&amp;</span>LRUCache<span class="token punctuation">{</span>
    capacity<span class="token punctuation">:</span> capacity<span class="token punctuation">,</span>
        size<span class="token punctuation">:</span>     <span class="token number">0</span><span class="token punctuation">,</span>
        cache<span class="token punctuation">:</span>    <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>BiLinkedNode<span class="token punctuation">)</span><span class="token punctuation">,</span>
        head<span class="token punctuation">:</span>     <span class="token function">NewBiLinkedNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        tail<span class="token punctuation">:</span>     <span class="token function">NewBiLinkedNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

     cache<span class="token punctuation">.</span>head<span class="token punctuation">.</span>Next <span class="token operator">=</span> cache<span class="token punctuation">.</span>tail
     cache<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>Prev <span class="token operator">=</span> cache<span class="token punctuation">.</span>head

     <span class="token keyword">return</span> cache
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> c<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>

    node <span class="token operator">:=</span> c<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    c<span class="token punctuation">.</span><span class="token function">moveToHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>Value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">Put</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> c<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        node <span class="token operator">:=</span> <span class="token function">NewBiLinkedNode</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> node
        c<span class="token punctuation">.</span><span class="token function">addToHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span>size <span class="token operator">++</span>

        <span class="token keyword">if</span> c<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> c<span class="token punctuation">.</span>capacity <span class="token punctuation">{</span>
            removed <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">delete</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>cache<span class="token punctuation">,</span> removed<span class="token punctuation">.</span>Key<span class="token punctuation">)</span>
            c<span class="token punctuation">.</span>size<span class="token operator">--</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    node <span class="token operator">:=</span> c<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    node<span class="token punctuation">.</span>Value <span class="token operator">=</span> value
    c<span class="token punctuation">.</span><span class="token function">moveToHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">addToHead</span><span class="token punctuation">(</span>node <span class="token operator">*</span>BiLinkedNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>Prev <span class="token operator">=</span> c<span class="token punctuation">.</span>head
    node<span class="token punctuation">.</span>Next <span class="token operator">=</span> c<span class="token punctuation">.</span>head<span class="token punctuation">.</span>Next
    c<span class="token punctuation">.</span>head<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Prev <span class="token operator">=</span> node
    c<span class="token punctuation">.</span>head<span class="token punctuation">.</span>Next <span class="token operator">=</span> node
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>node <span class="token operator">*</span>BiLinkedNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>Prev<span class="token punctuation">.</span>Next <span class="token operator">=</span> node<span class="token punctuation">.</span>Next
    node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Prev <span class="token operator">=</span> node<span class="token punctuation">.</span>Prev
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">moveToHead</span><span class="token punctuation">(</span>node <span class="token operator">*</span>BiLinkedNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">addToHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>BiLinkedNode <span class="token punctuation">{</span>
    node <span class="token operator">:=</span> c<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>Prev
    c<span class="token punctuation">.</span><span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>

    <span class="token keyword">return</span> node
<span class="token punctuation">}</span>

<span class="token keyword">type</span> BiLinkedNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Key   <span class="token builtin">int</span>
    Value <span class="token builtin">int</span>
    Prev  <span class="token operator">*</span>BiLinkedNode
    Next  <span class="token operator">*</span>BiLinkedNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewBiLinkedNode</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>BiLinkedNode <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>BiLinkedNode<span class="token punctuation">{</span>
        Key<span class="token punctuation">:</span>   k<span class="token punctuation">,</span>
        Value<span class="token punctuation">:</span> v<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k=[c,i,l,u];function d(r,v){return t(),e("div",null,k)}const b=a(o,[["render",d],["__file","LRU.html.vue"]]);export{b as default};
