const e=JSON.parse('{"key":"v-4dbd1d2b","path":"/posts/Algorithm/Template/DynamicProgramming/KnapsackProblem/CompleteKnapsack.html","title":"完全背包问题","lang":"zh-CN","frontmatter":{"date":"2023-08-10T00:00:00.000Z","category":["算法"],"tag":["算法模板","背包问题"],"description":"完全背包问题 完全背包问题的分析和 01 背包问题相似, 只是在状态转移和优化上不同. 例题 完全背包问题-acwing 完全背包问题-acwing 状态转移分析 对于第 i 个物品, 可以选择取 0 ~ k 个, 因此, f(i, j) = max(f(i - 1, j), f(i - 1, j - k * v_i) + k * w_i).","head":[["meta",{"property":"og:url","content":"https://riicarus.github.io/posts/Algorithm/Template/DynamicProgramming/KnapsackProblem/CompleteKnapsack.html"}],["meta",{"property":"og:site_name","content":"Riicarus"}],["meta",{"property":"og:title","content":"完全背包问题"}],["meta",{"property":"og:description","content":"完全背包问题 完全背包问题的分析和 01 背包问题相似, 只是在状态转移和优化上不同. 例题 完全背包问题-acwing 完全背包问题-acwing 状态转移分析 对于第 i 个物品, 可以选择取 0 ~ k 个, 因此, f(i, j) = max(f(i - 1, j), f(i - 1, j - k * v_i) + k * w_i)."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-12T09:37:20.000Z"}],["meta",{"property":"article:tag","content":"算法模板"}],["meta",{"property":"article:tag","content":"背包问题"}],["meta",{"property":"article:published_time","content":"2023-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-12T09:37:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"完全背包问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-12T09:37:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"例题","slug":"例题","link":"#例题","children":[{"level":3,"title":"状态转移分析","slug":"状态转移分析","link":"#状态转移分析","children":[]},{"level":3,"title":"优化","slug":"优化","link":"#优化","children":[]}]}],"git":{"createdTime":1691833040000,"updatedTime":1691833040000,"contributors":[{"name":"Riicarus","email":"riicarus.acc@gmail.com","commits":1}]},"readingTime":{"minutes":1.44,"words":431},"filePathRelative":"posts/Algorithm/Template/DynamicProgramming/KnapsackProblem/CompleteKnapsack.md","localizedDate":"2023年8月10日","excerpt":"<h1> 完全背包问题</h1>\\n<p>完全背包问题的分析和 01 背包问题相似, 只是在状态转移和优化上不同.</p>\\n<h2> 例题</h2>\\n<p><a href=\\"https://www.acwing.com/video/945/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">完全背包问题-acwing</a></p>\\n<figure><figcaption>完全背包问题-acwing</figcaption></figure>\\n<h3> 状态转移分析</h3>\\n<p>对于第 <code>i</code> 个物品, 可以选择取 <code>0 ~ k</code> 个, 因此, <code>f(i, j) = max(f(i - 1, j), f(i - 1, j - k * v_i) + k * w_i)</code>.</p>","autoDesc":true}');export{e as data};
