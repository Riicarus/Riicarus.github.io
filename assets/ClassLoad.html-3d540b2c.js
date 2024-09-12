import{_ as e,V as a,W as i,$ as d}from"./framework-c6791857.js";const l={},c=d('<h1 id="类加载机制" tabindex="-1"><a class="header-anchor" href="#类加载机制" aria-hidden="true">#</a> 类加载机制</h1><ul><li><a href="#%E7%B1%BB%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%97%B6%E6%9C%BA">类加载的时机</a></li><li><a href="#%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B">类加载过程</a><ul><li><a href="#%E5%8A%A0%E8%BD%BD">加载</a></li><li><a href="#%E9%AA%8C%E8%AF%81">验证</a></li><li><a href="#%E5%87%86%E5%A4%87">准备</a></li><li><a href="#%E8%A7%A3%E6%9E%90">解析</a></li><li><a href="#%E5%88%9D%E5%A7%8B%E5%8C%96">初始化</a></li></ul></li><li><a href="#%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8">类加载器</a><ul><li><a href="#%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%A8%A1%E5%9E%8B">双亲委派模型</a><ul><li><a href="#%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8%E7%B1%BB%E5%9E%8B">类加载器类型</a></li><li><a href="#%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%9C%BA%E5%88%B6">双亲委派机制</a></li></ul></li></ul></li></ul><h2 id="类加载的时机" tabindex="-1"><a class="header-anchor" href="#类加载的时机" aria-hidden="true">#</a> 类加载的时机</h2><p>有且只有六种情况必须立即对类进行初始化(包括加载, 验证, 准备, 解析).</p><ol><li>遇到 <code>new</code>, <code>getstatic</code>, <code>putstatic</code>, <code>invokestatic</code> 这四条字节码指令时, 如果类型没有进行过初始化, 则需要先触发其初始化阶段. 典型场景有: <ol><li>使用 <code>new</code> 关键字实例化对象的时候.</li><li>读取或者设置一个类型的静态字段(被 <code>final</code> 修饰或已经在编译器把结果方式常量池的静态字段除外)的时候.</li><li>调用一个类型的静态方法的时候.</li></ol></li><li>使用 <code>java.lang.reflect</code> 的方法对类型进行反射调用的时候, 如果类型没有进行过初始化, 则需要先触发其初始化.</li><li>当初始化类的时候, 如果发现父类还没有进行初始化, 需要先触发弗雷的初始化.</li><li>当虚拟机启动时, 用户需要指定一个要执行的主类, 虚拟机会先初始化这个主类.</li><li>当使用 JDK7 加入的动态语言支持时, 如果一个 <code>java.lang.invoke.MethodHandle</code> 实例最后的解析结果时 <code>REF_getStatic</code>, <code>REF_putStatic</code>, <code>REF_invokeStatic</code>, <code>REF_newInvokeSpecial</code> 四种类型的方法句柄, 并且这个方法句柄对应的类没有进行初始化, 则需要先触发其初始化.</li><li>当一个接口中定义里 JDK8 的默认方法时, 如果有这个接口的实现类发生了初始化, 那么该接口要在其之前被初始化.</li></ol><h2 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程" aria-hidden="true">#</a> 类加载过程</h2><p>类的生命周期:</p><p>加载 -&gt; 验证 -&gt; 准备 -&gt; 解析 -&gt; 初始化 -&gt; 使用 -&gt; 卸载.</p><p>验证 -&gt; 准备 -&gt; 解析阶段共同组成连接阶段.</p><h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h3><p>加载是类加载过程的第一个阶段, 主要完成下面三件事:</p><ol><li>通过一个类的全限定名称来获取定义此类的二进制字节流.</li><li>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构.</li><li>在内存中生成一个代表这个类的 <code>java.lang.Class</code> 对象, 作为方法区这个类的各种数据的访问入口.</li></ol><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>验证是连接阶段的第一步, 目的是保证确保 Class 文件的字节流中包含的信息符合《Java 虚拟机规范》的全部约束要求, 确保这些信息被当作代码运行后不会危害虚拟机自身的安全.</p><p>主要会完成四个阶段的检验动作:</p><ol><li>文件格式验证: class 文件结构/版本号/常量池...</li><li>元数据验证: 是否有父类/是否继承了不允许被继承的类/是否实现了所有的方法...</li><li>字节码验证: 对类的方法体(class 文件中的 <code>Code</code> 属性)进行校验分析</li><li>符号引用验证: 字符串描述的全限定类名能否找到对应的类/符号引用的可访问性...</li></ol><h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3><p>准备阶段是正式为类中的变量(即静态变量)分配内存并设置类变量初始值的阶段. 一般来说, 静态变量在方法区中进行分配.</p><p>准备阶段中, JVM 会为非 <code>final</code> 修饰的静态变量赋初始值(零值);</p><p>而对于被 <code>final</code> 修饰的静态变量, 或者说, 常量, JVM 会在准备阶段根据类字段的字段属性表中的 <code>ConstantValue</code> 属性为其赋初始值.</p><h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h3><p>JVM 在解析阶段将常量池内的符号引用替换为直接引用.</p><p>解析动作主要针对类或者接口/字段/类方法/接口方法/方法类型/方法句柄和调用点限定符这 7 类符号引用进行.</p><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p>类的初始化阶段是类加载过程的最后一个步骤.</p><p>在初始化阶段, JVM 会根据程序员通过程序编码指定的主观计划去初始化类变量和其他资源. 初始化阶段就是执行类构造器 <code>&lt;clinit&gt;()</code> 方法的过程.</p><p><code>&lt;clinit&gt;()</code> 方法由 Javac 编译器自动生成, 是由编译器收集类中的所有类变量的复制动作和静态语句块中的语句合并产生的 , 编译器的收集顺序由语句在源文件中的出现顺序决定.</p><p><code>&lt;clinit&gt;()</code> 方法不需要显式进行父类构造器的调用, JVM 会保证在子类的<code>&lt;clinit&gt;()</code> 方法执行前, 父类的 <code>&lt;clinit&gt;()</code> 方法已经执行完毕. 由此, 父类的静态语句块执行要优先于子类的任何类初始化操作.</p><p><code>&lt;clinit&gt;()</code> 方法对类或者接口来说不是必须的, 如果一个类没有静态语句块, 也没有对静态变量的赋值操作, 那么编译器可以不为这个类生成 <code>&lt;clinit&gt;()</code> 方法.</p><p>接口同样可以有 <code>&lt;clinit&gt;()</code> 方法, 但是与类不同的是, 执行接口的 <code>&lt;clinit&gt;()</code> 方法不需要先执行父接口的 <code>&lt;clinit&gt;()</code> 方法, 只有当父接口中定义的变量被使用时, 父接口才被初始化. 接口的实现类的初始化也是如此.</p><p>JVM 会保证在多线程中, 只有一个线程执行 <code>&lt;clinit&gt;()</code> 方法, 其他线程都需要阻塞等待初始化完成.</p><h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器" aria-hidden="true">#</a> 类加载器</h2><p>类加载器虽然只用于实现类的加载动作, 但是在 Java 程序中起到的作用却远超类加载阶段.</p><p>对于任意一个类, 都必须由加载它的类加载器和这个类本身一起共同确立其在 Java 虚拟机中的唯一性, 每一个类加载器, 都有一个独立的类命名空间.</p><blockquote><p>如何判断一个类相等?</p><p>类的全限定名称相同 &amp;&amp; 加载这个类的类加载器相同</p></blockquote><h3 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型" aria-hidden="true">#</a> 双亲委派模型</h3><h4 id="类加载器类型" tabindex="-1"><a class="header-anchor" href="#类加载器类型" aria-hidden="true">#</a> 类加载器类型</h4><p>Java 中核心的类加载器有三个:</p><ol><li><code>BootstrapClassLoader</code>: 加载 <code>&lt;JAVA_HOME&gt;\\lib</code> 目录下, 或者被 <code>-Xbootclasspath</code> 指定的路径中存放的, JVM 能够识别的类库.</li><li><code>ExtensionClassLoader</code>: 加载 <code>&lt;JAVA_HOME&gt;\\lib\\ext</code> 目录下, 或者被 <code>java.ext.dirs</code> 系统变量指定的路径中所有的类库.</li><li><code>ApplicationClassLoader</code>: 加载用户路径下所有的类库.</li></ol><p>开发者可以使用 <code>ExtensionClassLoader</code> 和 <code>ApplicationClassLoader</code> 及其派生类来进行自定义的类加载.</p><p><code>ClassLoader</code> 偏向于使用组合来实现继承.</p><h4 id="双亲委派机制" tabindex="-1"><a class="header-anchor" href="#双亲委派机制" aria-hidden="true">#</a> 双亲委派机制</h4><p>如果一个类收到了类加载的请求, 它不会首先去自己尝试加载这个类, 而是把这个请求委派给父类加载器去完成, 只有当父加载器反馈自己无法完成加载请求时, 子加载器才会尝试自己完成加载.</p><p>这样的好处是 Java 中的类随着它的加载器具备了一种带有优先级的层次关系. 保证了核心类只存在由 JVM 加载的一份, 确保了类加载和执行的安全性和有序性.</p>',44),o=[c];function t(r,h){return a(),i("div",null,o)}const s=e(l,[["render",t],["__file","ClassLoad.html.vue"]]);export{s as default};
