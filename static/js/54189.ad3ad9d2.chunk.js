"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[54189],{54189:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(42508),o=a(11346),r={"createLong(Ljava/lang/String;IIJ)Ljava/nio/ByteBuffer;":(e,t)=>{const a=t[4],r=e.getMethod().getClass().getLoader().getClass("java/nio/DirectByteBuffer");if(r.status===o.ResultType.ERROR)return void e.throwNewException(r.exceptionCls,r.msg);const i=r.result,s=e.getJVM().getUnsafeHeap(),c=s.allocate(BigInt(8)),g=i.instantiate(),l=i.getMethod("<init>(JI)V");l?e.invokeStackFrame(new n.InternalStackFrame(i,l,0,[g,c,c,8],((t,n)=>{n?e.throwNewException(n.exceptionCls,n.msg):(s.get(c).setBigInt64(0,a),e.returnStackFrame(g))}))):e.throwNewException("java/lang/NoSuchMethodError","<init>(JI)V")}};t.default=r}}]);
//# sourceMappingURL=54189.ad3ad9d2.chunk.js.map