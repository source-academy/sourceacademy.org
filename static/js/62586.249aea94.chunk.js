"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[62586],{62586:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=a(42508),o=a(11346),n=a(95303),r=(e,t)=>{const a=t[0],n=a.getClass().resolveMethod("run()","Ljava/lang/Object;",e.getClass());if(n.status!==o.ResultType.SUCCESS)return void e.throwNewException(n.exceptionCls,n.msg);const r=n.result;e.invokeStackFrame(new s.InternalStackFrame(r.getClass(),r,0,[a],(t=>{e.returnStackFrame(t)})))},c={"doPrivileged(Ljava/security/PrivilegedExceptionAction;Ljava/security/AccessControlContext;)Ljava/lang/Object;":r,"doPrivileged(Ljava/security/PrivilegedExceptionAction;)Ljava/lang/Object;":r,"doPrivileged(Ljava/security/PrivilegedAction;Ljava/security/AccessControlContext;)Ljava/lang/Object;":r,"doPrivileged(Ljava/security/PrivilegedAction;)Ljava/lang/Object;":(e,t)=>{const a=t[0],n=e.getClass().getLoader(),r=n.getClass("java/security/AccessController");if(r.status===o.ResultType.ERROR)return void e.throwNewException(r.exceptionCls,r.msg);const c=r.result,i=n.getClass("java/security/PrivilegedAction");if(i.status===o.ResultType.ERROR)return void e.throwNewException(i.exceptionCls,i.msg);const l=i.result.resolveMethod("run()","Ljava/lang/Object;",c);if(l.status===o.ResultType.ERROR)return void e.throwNewException(l.exceptionCls,l.msg);const u=l.result,v=a.getClass(),g=v.lookupMethod("run()Ljava/lang/Object;",u);if(g.status===o.ResultType.ERROR)return void e.throwNewException(g.exceptionCls,g.msg);const d=g.result;d?e.invokeStackFrame(new s.InternalStackFrame(v,d,0,[a],(t=>{e.returnStackFrame(t)}))):e.throwNewException("java/lang/NoSuchMethodException","run()Ljava/lang/Object;")},"getStackAccessControlContext()Ljava/security/AccessControlContext;":e=>{n.logger.warn("getStackAccessControlContext()Ljava/security/AccessControlContext; not implemented"),e.returnStackFrame(null)}};t.default=c}}]);
//# sourceMappingURL=62586.249aea94.chunk.js.map