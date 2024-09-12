import{_ as t,V as p,W as e,X as n,Y as o,Z as c,$ as s,F as i}from"./framework-c6791857.js";const l="/assets/acwing_842-e79a6c0e.png",u={},k=s(`<h1 id="dfs" tabindex="-1"><a class="header-anchor" href="#dfs" aria-hidden="true">#</a> DFS</h1><p>适合于遍历树, 枚举情况等.</p><p>属于<strong>回溯法</strong>的一种.</p><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEnd</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something ...</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// iterate all options</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isUsed</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// update some attributes</span>
            <span class="token function">updatePath</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// the core backtrack method</span>
            <span class="token function">updateState</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">backtrackState</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h2>`,6),d={href:"https://www.acwing.com/problem/content/844/",target:"_blank",rel:"noopener noreferrer"},r=s('<figure><img src="'+l+`" alt="排列数字-acwing" tabindex="0" loading="lazy"><figcaption>排列数字-acwing</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> acwing_842 <span class="token punctuation">{</span>

    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> path<span class="token punctuation">;</span>

    <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> state<span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token class-name">N</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">arrangeNumbers</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">N</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
        state <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token class-name">N</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>state<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                path<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

                state<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                state<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        acwing_842 acwing842 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">acwing_842</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        acwing842<span class="token punctuation">.</span><span class="token function">arrangeNumbers</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(m,b){const a=i("ExternalLinkIcon");return p(),e("div",null,[k,n("p",null,[n("a",d,[o("排列数字-acwing"),c(a)])]),r])}const w=t(u,[["render",v],["__file","DFS.html.vue"]]);export{w as default};
