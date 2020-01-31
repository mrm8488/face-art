!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 24));
})([
  function(t, e, n) {
    "undefined" != typeof self && self,
      (t.exports = (function(t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var i = (n[r] = { i: r, l: !1, exports: {} });
          return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
        }
        var n = {};
        return (
          (e.m = t),
          (e.c = n),
          (e.d = function(t, n, r) {
            e.o(t, n) ||
              Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
              });
          }),
          (e.n = function(t) {
            var n =
              t && t.__esModule
                ? function() {
                    return t.default;
                  }
                : function() {
                    return t;
                  };
            return e.d(n, "a", n), n;
          }),
          (e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.p = ""),
          e((e.s = 37))
        );
      })([
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(2),
            o = r(n(42)),
            s = r(n(43)),
            u = r(n(44)),
            c = r(n(45)),
            l = (r(n(24)), n(46)),
            h = r(l),
            f = void 0,
            d = new ((function() {
              function t() {
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  this.canvas,
                  (this._viewport = [0, 0, 0, 0]),
                  (this._enabledVertexAttribute = []),
                  (this.identityMatrix = a.mat4.create()),
                  (this._normalMatrix = a.mat3.create()),
                  (this._inverseModelViewMatrix = a.mat3.create()),
                  (this._modelMatrix = a.mat4.create()),
                  (this._matrix = a.mat4.create()),
                  (this._matrixStacks = []),
                  (this._lastMesh = null),
                  (this._useWebGL2 = !1),
                  this._hasArrayInstance,
                  this._extArrayInstance,
                  (this._hasCheckedExt = !1),
                  a.mat4.identity(this.identityMatrix, this.identityMatrix),
                  (this.isMobile = !1),
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) && (this.isMobile = !0);
              }
              return (
                i(t, [
                  {
                    key: "init",
                    value: function(t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (null != t) {
                        void 0 !== this.canvas &&
                          null !== this.canvas &&
                          this.destroy(),
                          (this.canvas = t),
                          this.setSize(window.innerWidth, window.innerHeight),
                          (e.useWebgl2 = e.useWebgl2 || !1);
                        var n = void 0;
                        e.useWebgl2 &&
                        (n =
                          this.canvas.getContext("experimental-webgl2", e) ||
                          this.canvas.getContext("webgl2", e))
                          ? (this._useWebGL2 = !0)
                          : ((n =
                              this.canvas.getContext("webgl", e) ||
                              this.canvas.getContext("experimental-webgl", e)),
                            (this._useWebGL2 = !1)),
                          console.log("Using WebGL 2 ?", this.webgl2),
                          this.initWithGL(n);
                      } else console.error("Canvas not exist");
                    }
                  },
                  {
                    key: "initWithGL",
                    value: function(t) {
                      this.canvas || (this.canvas = t.canvas),
                        (f = this.gl = t),
                        (this.extensions = {});
                      for (var e = 0; e < h.default.length; e++)
                        this.extensions[h.default[e]] = f.getExtension(
                          h.default[e]
                        );
                      (0, s.default)(),
                        (0, o.default)(f, "OES_vertex_array_object"),
                        (0, o.default)(f, "ANGLE_instanced_arrays"),
                        (0, o.default)(f, "WEBGL_draw_buffers"),
                        this.enable(this.DEPTH_TEST),
                        this.enable(this.CULL_FACE),
                        this.enable(this.BLEND),
                        this.enableAlphaBlending();
                    }
                  },
                  {
                    key: "setViewport",
                    value: function(t, e, n, r) {
                      var i = !1;
                      t !== this._viewport[0] && (i = !0),
                        e !== this._viewport[1] && (i = !0),
                        n !== this._viewport[2] && (i = !0),
                        r !== this._viewport[3] && (i = !0),
                        i &&
                          (f.viewport(t, e, n, r),
                          (this._viewport = [t, e, n, r]));
                    }
                  },
                  {
                    key: "scissor",
                    value: function(t, e, n, r) {
                      f.scissor(t, e, n, r);
                    }
                  },
                  {
                    key: "clear",
                    value: function(t, e, n, r) {
                      f.clearColor(t, e, n, r),
                        f.clear(f.COLOR_BUFFER_BIT | f.DEPTH_BUFFER_BIT);
                    }
                  },
                  {
                    key: "cullFace",
                    value: function(t) {
                      f.cullFace(t);
                    }
                  },
                  {
                    key: "setMatrices",
                    value: function(t) {
                      (this.camera = t), this.rotate(this.identityMatrix);
                    }
                  },
                  {
                    key: "useShader",
                    value: function(t) {
                      (this.shader = t),
                        (this.shaderProgram = this.shader.shaderProgram);
                    }
                  },
                  {
                    key: "rotate",
                    value: function(t) {
                      a.mat4.copy(this._modelMatrix, t),
                        a.mat4.multiply(
                          this._matrix,
                          this.camera.matrix,
                          this._modelMatrix
                        ),
                        a.mat3.fromMat4(this._normalMatrix, this._matrix),
                        a.mat3.invert(this._normalMatrix, this._normalMatrix),
                        a.mat3.transpose(
                          this._normalMatrix,
                          this._normalMatrix
                        ),
                        a.mat3.fromMat4(
                          this._inverseModelViewMatrix,
                          this._matrix
                        ),
                        a.mat3.invert(
                          this._inverseModelViewMatrix,
                          this._inverseModelViewMatrix
                        );
                    }
                  },
                  {
                    key: "draw",
                    value: function(t, e) {
                      if (t.length)
                        for (var n = 0; n < t.length; n++) this.draw(t[n]);
                      else {
                        t.bind(this.shaderProgram),
                          void 0 !== this.camera &&
                            (this.shader.uniform(
                              "uProjectionMatrix",
                              "mat4",
                              this.camera.projection
                            ),
                            this.shader.uniform(
                              "uViewMatrix",
                              "mat4",
                              this.camera.matrix
                            )),
                          this.shader.uniform(
                            "uModelMatrix",
                            "mat4",
                            this._modelMatrix
                          ),
                          this.shader.uniform(
                            "uNormalMatrix",
                            "mat3",
                            this._normalMatrix
                          ),
                          this.shader.uniform(
                            "uModelViewMatrixInverse",
                            "mat3",
                            this._inverseModelViewMatrix
                          );
                        var r = t.drawType;
                        void 0 !== e && (r = e),
                          t.isInstanced
                            ? f.drawElementsInstanced(
                                t.drawType,
                                t.iBuffer.numItems,
                                f.UNSIGNED_SHORT,
                                0,
                                t.numInstance
                              )
                            : r === f.POINTS
                            ? f.drawArrays(r, 0, t.vertexSize)
                            : f.drawElements(
                                r,
                                t.iBuffer.numItems,
                                f.UNSIGNED_SHORT,
                                0
                              ),
                          t.unbind();
                      }
                    }
                  },
                  {
                    key: "drawTransformFeedback",
                    value: function(t) {
                      var e = t.meshSource,
                        n = t.meshDestination,
                        r = t.numPoints,
                        i = t.transformFeedback;
                      e.bind(this.shaderProgram),
                        n.generateBuffers(this.shaderProgram),
                        f.bindTransformFeedback(f.TRANSFORM_FEEDBACK, i),
                        n.attributes.forEach(function(t, e) {
                          f.bindBufferBase(
                            f.TRANSFORM_FEEDBACK_BUFFER,
                            e,
                            t.buffer
                          );
                        }),
                        f.enable(f.RASTERIZER_DISCARD),
                        f.beginTransformFeedback(f.POINTS),
                        f.drawArrays(f.POINTS, 0, r),
                        f.endTransformFeedback(),
                        f.disable(f.RASTERIZER_DISCARD),
                        f.useProgram(null),
                        f.bindBuffer(f.ARRAY_BUFFER, null),
                        n.attributes.forEach(function(t, e) {
                          f.bindBufferBase(
                            f.TRANSFORM_FEEDBACK_BUFFER,
                            e,
                            null
                          );
                        }),
                        f.bindTransformFeedback(f.TRANSFORM_FEEDBACK, null),
                        e.unbind();
                    }
                  },
                  {
                    key: "setSize",
                    value: function(t, e) {
                      (this._width = t),
                        (this._height = e),
                        (this.canvas.width = this._width),
                        (this.canvas.height = this._height),
                        (this._aspectRatio = this._width / this._height),
                        f && this.viewport(0, 0, this._width, this._height);
                    }
                  },
                  {
                    key: "showExtensions",
                    value: function() {
                      for (var t in (console.log(
                        "Extensions : ",
                        this.extensions
                      ),
                      this.extensions))
                        this.extensions[t] &&
                          console.log(t, ":", this.extensions[t]);
                    }
                  },
                  {
                    key: "checkExtension",
                    value: function(t) {
                      return !!this.extensions[t];
                    }
                  },
                  {
                    key: "getExtension",
                    value: function(t) {
                      return this.extensions[t];
                    }
                  },
                  {
                    key: "enableAlphaBlending",
                    value: function() {
                      f.blendFunc(f.SRC_ALPHA, f.ONE_MINUS_SRC_ALPHA);
                    }
                  },
                  {
                    key: "enableAdditiveBlending",
                    value: function() {
                      f.blendFunc(f.ONE, f.ONE);
                    }
                  },
                  {
                    key: "pushMatrix",
                    value: function() {
                      var t = a.mat4.clone(this._modelMatrix);
                      this._matrixStacks.push(t);
                    }
                  },
                  {
                    key: "popMatrix",
                    value: function() {
                      if (0 == this._matrixStacks.length) return null;
                      var t = this._matrixStacks.pop();
                      this.rotate(t);
                    }
                  },
                  {
                    key: "enable",
                    value: function(t) {
                      f.enable(t);
                    }
                  },
                  {
                    key: "disable",
                    value: function(t) {
                      f.disable(t);
                    }
                  },
                  {
                    key: "viewport",
                    value: function(t, e, n, r) {
                      this.setViewport(t, e, n, r);
                    }
                  },
                  {
                    key: "destroy",
                    value: function() {
                      if (this.canvas.parentNode)
                        try {
                          this.canvas.parentNode.removeChild(this.canvas);
                        } catch (t) {
                          console.log("Error : ", t);
                        }
                      this.canvas = null;
                    }
                  },
                  {
                    key: "FLOAT",
                    get: function() {
                      return (0, u.default)();
                    }
                  },
                  {
                    key: "HALF_FLOAT",
                    get: function() {
                      return (0, c.default)();
                    }
                  },
                  {
                    key: "width",
                    get: function() {
                      return this._width;
                    }
                  },
                  {
                    key: "height",
                    get: function() {
                      return this._height;
                    }
                  },
                  {
                    key: "aspectRatio",
                    get: function() {
                      return this._aspectRatio;
                    }
                  },
                  {
                    key: "webgl2",
                    get: function() {
                      return this._useWebGL2;
                    }
                  }
                ]),
                t
              );
            })())();
          e.default = d;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(t) {
                    return typeof t;
                  }
                : function(t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            a = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = n(0),
            s = (r = o) && r.__esModule ? r : { default: r },
            u =
              (n(47),
              function(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
                return !0;
              }),
            c = function(t) {
              return t.slice ? t.slice(0) : new Float32Array(t);
            },
            l = void 0,
            h = n(9),
            f = n(48),
            d = {
              float: "uniform1f",
              vec2: "uniform2fv",
              vec3: "uniform3fv",
              vec4: "uniform4fv",
              int: "uniform1i",
              mat3: "uniformMatrix3fv",
              mat4: "uniformMatrix4fv"
            },
            _ = (function() {
              function t() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : h,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : f,
                  r = arguments[2];
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (l = s.default.gl),
                  (this.parameters = []),
                  (this.uniformTextures = []),
                  (this._varyings = r),
                  e || (e = h),
                  n || (n = h);
                var i = this._createShaderProgram(e, !0),
                  a = this._createShaderProgram(n, !1);
                this._attachShaderProgram(i, a);
              }
              return (
                a(t, [
                  {
                    key: "bind",
                    value: function() {
                      s.default.shader !== this &&
                        (l.useProgram(this.shaderProgram),
                        s.default.useShader(this),
                        (this.uniformTextures = []));
                    }
                  },
                  {
                    key: "uniform",
                    value: function(t, e, n) {
                      if ("object" !== (void 0 === t ? "undefined" : i(t))) {
                        for (
                          var r = d[e] || e, a = !1, o = void 0, s = -1, h = 0;
                          h < this.parameters.length;
                          h++
                        )
                          if ((o = this.parameters[h]).name === t) {
                            (a = !0), (s = h);
                            break;
                          }
                        var f = !1;
                        a
                          ? ((this.shaderProgram[t] = o.uniformLoc),
                            (f = o.isNumber))
                          : ((f = "uniform1i" === r || "uniform1f" === r),
                            (this.shaderProgram[t] = l.getUniformLocation(
                              this.shaderProgram,
                              t
                            )),
                            f
                              ? this.parameters.push({
                                  name: t,
                                  type: r,
                                  value: n,
                                  uniformLoc: this.shaderProgram[t],
                                  isNumber: f
                                })
                              : this.parameters.push({
                                  name: t,
                                  type: r,
                                  value: c(n),
                                  uniformLoc: this.shaderProgram[t],
                                  isNumber: f
                                }),
                            (s = this.parameters.length - 1)),
                          this.parameters[s].uniformLoc &&
                            (-1 === r.indexOf("Matrix")
                              ? f
                                ? (this.parameters[s].value !== n || !a) &&
                                  (l[r](this.shaderProgram[t], n),
                                  (this.parameters[s].value = n))
                                : (u(this.parameters[s].value, n) && a) ||
                                  (l[r](this.shaderProgram[t], n),
                                  (this.parameters[s].value = c(n)))
                              : (u(this.parameters[s].value, n) && a) ||
                                (l[r](this.shaderProgram[t], !1, n),
                                (this.parameters[s].value = c(n))));
                      } else this.uniformObject(t);
                    }
                  },
                  {
                    key: "uniformObject",
                    value: function(e) {
                      for (var n in e) {
                        var r = e[n],
                          i = t.getUniformType(r);
                        if (r.concat && r[0].concat) {
                          for (var a = [], o = 0; o < r.length; o++)
                            a = a.concat(r[o]);
                          r = a;
                        }
                        this.uniform(n, i, r);
                      }
                    }
                  },
                  {
                    key: "_createShaderProgram",
                    value: function(t, e) {
                      var n = e
                          ? s.default.VERTEX_SHADER
                          : s.default.FRAGMENT_SHADER,
                        r = l.createShader(n);
                      return (
                        l.shaderSource(r, t),
                        l.compileShader(r),
                        l.getShaderParameter(r, l.COMPILE_STATUS)
                          ? r
                          : (console.warn(
                              "Error in Shader : ",
                              l.getShaderInfoLog(r)
                            ),
                            console.log(
                              (function(t) {
                                for (
                                  var e = t.split("\n"), n = 0;
                                  n < e.length;
                                  n++
                                )
                                  e[n] = n + 1 + ": " + e[n];
                                return e.join("\n");
                              })(t)
                            ),
                            null)
                      );
                    }
                  },
                  {
                    key: "_attachShaderProgram",
                    value: function(t, e) {
                      (this.shaderProgram = l.createProgram()),
                        l.attachShader(this.shaderProgram, t),
                        l.attachShader(this.shaderProgram, e),
                        l.deleteShader(t),
                        l.deleteShader(e),
                        this._varyings &&
                          (console.log(
                            "Transform feedback setup : ",
                            this._varyings
                          ),
                          l.transformFeedbackVaryings(
                            this.shaderProgram,
                            this._varyings,
                            l.SEPARATE_ATTRIBS
                          )),
                        l.linkProgram(this.shaderProgram);
                    }
                  }
                ]),
                t
              );
            })();
          (_.getUniformType = function(t) {
            return t.concat
              ? (function(t) {
                  return 9 === t.length
                    ? "uniformMatrix3fv"
                    : 16 === t.length
                    ? "uniformMatrix4fv"
                    : "vec" + t.length;
                })(t[0].concat ? t[0] : t)
              : "float";
          }),
            (e.default = _);
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.vec4 = e.vec3 = e.vec2 = e.quat2 = e.quat = e.mat4 = e.mat3 = e.mat2d = e.mat2 = e.glMatrix = void 0);
          var i = r(n(3)),
            a = r(n(38)),
            o = r(n(39)),
            s = r(n(18)),
            u = r(n(19)),
            c = r(n(20)),
            l = r(n(40)),
            h = r(n(41)),
            f = r(n(21)),
            d = r(n(22));
          (e.glMatrix = i),
            (e.mat2 = a),
            (e.mat2d = o),
            (e.mat3 = s),
            (e.mat4 = u),
            (e.quat = c),
            (e.quat2 = l),
            (e.vec2 = h),
            (e.vec3 = f),
            (e.vec4 = d);
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setMatrixArrayType = function(t) {
              e.ARRAY_TYPE = t;
            }),
            (e.toRadian = function(t) {
              return t * i;
            }),
            (e.equals = function(t, e) {
              return (
                Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e))
              );
            });
          var r = (e.EPSILON = 1e-6),
            i =
              ((e.ARRAY_TYPE =
                "undefined" != typeof Float32Array ? Float32Array : Array),
              (e.RANDOM = Math.random),
              Math.PI / 180);
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            i = new ((function() {
              function t() {
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._delayTasks = []),
                  (this._nextTasks = []),
                  (this._deferTasks = []),
                  (this._highTasks = []),
                  (this._usurpTask = []),
                  (this._enterframeTasks = []),
                  (this._idTable = 0),
                  (this._startTime = new Date().getTime()),
                  (this._deltaTime = 0),
                  (this._internalTime = 0),
                  (this._isPaused = !1),
                  this._loop();
              }
              return (
                r(t, [
                  {
                    key: "addEF",
                    value: function(t, e) {
                      e = e || [];
                      var n = this._idTable;
                      return (
                        (this._enterframeTasks[n] = { func: t, params: e }),
                        this._idTable++,
                        n
                      );
                    }
                  },
                  {
                    key: "removeEF",
                    value: function(t) {
                      return (
                        void 0 !== this._enterframeTasks[t] &&
                          (this._enterframeTasks[t] = null),
                        -1
                      );
                    }
                  },
                  {
                    key: "delay",
                    value: function(t, e, n) {
                      var r = {
                        func: t,
                        params: e,
                        delay: n,
                        time: new Date().getTime()
                      };
                      this._delayTasks.push(r);
                    }
                  },
                  {
                    key: "defer",
                    value: function(t, e) {
                      var n = { func: t, params: e };
                      this._deferTasks.push(n);
                    }
                  },
                  {
                    key: "next",
                    value: function(t, e) {
                      var n = { func: t, params: e };
                      this._nextTasks.push(n);
                    }
                  },
                  {
                    key: "usurp",
                    value: function(t, e) {
                      var n = { func: t, params: e };
                      this._usurpTask.push(n);
                    }
                  },
                  {
                    key: "pause",
                    value: function() {
                      this._isPaused = !0;
                    }
                  },
                  {
                    key: "advance",
                    value: function() {
                      this._internalTime += 1 / 60;
                    }
                  },
                  {
                    key: "resume",
                    value: function() {
                      this._isPaused = !1;
                    }
                  },
                  {
                    key: "_process",
                    value: function() {
                      var t = 0,
                        e = void 0,
                        n = void 0;
                      for (t = 0; t < this._enterframeTasks.length; t++)
                        null !== (e = this._enterframeTasks[t]) &&
                          void 0 !== e &&
                          e.func(e.params);
                      for (; this._highTasks.length > 0; )
                        (e = this._highTasks.pop()).func(e.params);
                      var r = new Date().getTime(),
                        i = this._deltaTime;
                      for (
                        this._deltaTime = (r - this._startTime) / 1e3, t = 0;
                        t < this._delayTasks.length;
                        t++
                      )
                        r - (e = this._delayTasks[t]).time > e.delay &&
                          (e.func(e.params), this._delayTasks.splice(t, 1));
                      for (
                        r = new Date().getTime(),
                          this._deltaTime = (r - this._startTime) / 1e3,
                          n = 1e3 / 60;
                        this._deferTasks.length > 0;

                      ) {
                        if (
                          ((e = this._deferTasks.shift()),
                          !(new Date().getTime() - r < n))
                        ) {
                          this._deferTasks.unshift(e);
                          break;
                        }
                        e.func(e.params);
                      }
                      for (
                        r = new Date().getTime(),
                          this._deltaTime = (r - this._startTime) / 1e3,
                          n = 1e3 / 60;
                        this._usurpTask.length > 0;

                      )
                        (e = this._usurpTask.shift()),
                          new Date().getTime() - r < n && e.func(e.params);
                      (this._highTasks = this._highTasks.concat(
                        this._nextTasks
                      )),
                        (this._nextTasks = []),
                        (this._usurpTask = []),
                        this._isPaused ||
                          (this._internalTime += this._deltaTime - i);
                    }
                  },
                  {
                    key: "_loop",
                    value: function() {
                      var t = this;
                      this._process(),
                        window.requestAnimationFrame(function() {
                          return t._loop();
                        });
                    }
                  },
                  {
                    key: "intervalTime",
                    get: function() {
                      return this._internalTime;
                    }
                  },
                  {
                    key: "deltaTime",
                    get: function() {
                      return this._deltaTime;
                    }
                  }
                ]),
                t
              );
            })())();
          e.default = i;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = n(2),
            s = r(n(24)),
            u = void 0,
            c = function(t) {
              var e = void 0;
              return (
                void 0 !== t.buffer
                  ? (e = t.buffer)
                  : ((e = u.createBuffer()), (t.buffer = e)),
                e
              );
            },
            l = function(t, e) {
              for (var n = [], r = 0; r < t.length; r += e) {
                for (var i = [], a = 0; a < e; a++) i.push(t[r + a]);
                n.push(i);
              }
              return n;
            },
            h = (function() {
              function t() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 4,
                  n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (u = a.default.gl),
                  (this.drawType = e),
                  (this._attributes = []),
                  (this._numInstance = -1),
                  (this._enabledVertexAttribute = []),
                  (this._indices = []),
                  (this._faces = []),
                  (this._bufferChanged = []),
                  (this._hasIndexBufferChanged = !1),
                  (this._hasVAO = !1),
                  (this._isInstanced = !1),
                  (this._extVAO = !!a.default.gl.createVertexArray),
                  (this._useVAO = !!this._extVAO && n);
              }
              return (
                i(t, [
                  {
                    key: "bufferVertex",
                    value: function(t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 35044;
                      return (
                        this.bufferData(t, "aVertexPosition", 3, e),
                        this.normals.length < this.vertices.length &&
                          this.bufferNormal(t, e),
                        this
                      );
                    }
                  },
                  {
                    key: "bufferTexCoord",
                    value: function(t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 35044;
                      return this.bufferData(t, "aTextureCoord", 2, e), this;
                    }
                  },
                  {
                    key: "bufferNormal",
                    value: function(t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 35044;
                      return this.bufferData(t, "aNormal", 3, e), this;
                    }
                  },
                  {
                    key: "bufferIndex",
                    value: function(t) {
                      var e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      return (
                        (this._drawType = e ? u.DYNAMIC_DRAW : u.STATIC_DRAW),
                        (this._indices = new Uint16Array(t)),
                        (this._numItems = this._indices.length),
                        this
                      );
                    }
                  },
                  {
                    key: "bufferFlattenData",
                    value: function(t, e, n) {
                      var r =
                        (arguments.length > 3 &&
                          void 0 !== arguments[3] &&
                          arguments[3],
                        arguments.length > 4 &&
                          void 0 !== arguments[4] &&
                          arguments[4],
                        l(t, n));
                      return this.bufferData(r, e, n, 35044, !1), this;
                    }
                  },
                  {
                    key: "bufferData",
                    value: function(t, e, n) {
                      var r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 35044,
                        i =
                          arguments.length > 4 &&
                          void 0 !== arguments[4] &&
                          arguments[4],
                        a = 0,
                        o = r,
                        s = [];
                      for (
                        n || (n = t[0].length),
                          this._isInstanced = i || this._isInstanced,
                          a = 0;
                        a < t.length;
                        a++
                      )
                        for (var u = 0; u < t[a].length; u++) s.push(t[a][u]);
                      var c = new Float32Array(s),
                        l = this.getAttribute(e);
                      return (
                        l
                          ? ((l.itemSize = n),
                            (l.dataArray = c),
                            (l.source = t))
                          : this._attributes.push({
                              name: e,
                              source: t,
                              itemSize: n,
                              drawType: o,
                              dataArray: c,
                              isInstanced: i
                            }),
                        this._bufferChanged.push(e),
                        this
                      );
                    }
                  },
                  {
                    key: "bufferInstance",
                    value: function(t, e) {
                      if (a.default.gl.vertexAttribDivisor) {
                        var n = t[0].length;
                        (this._numInstance = t.length),
                          this.bufferData(t, e, n, 35044, !0);
                      } else
                        console.error(
                          "Extension : ANGLE_instanced_arrays is not supported with this device !"
                        );
                    }
                  },
                  {
                    key: "bind",
                    value: function(t) {
                      this.generateBuffers(t),
                        this.hasVAO
                          ? u.bindVertexArray(this.vao)
                          : (this.attributes.forEach(function(t) {
                              u.bindBuffer(u.ARRAY_BUFFER, t.buffer);
                              var e = t.attrPosition;
                              u.vertexAttribPointer(
                                e,
                                t.itemSize,
                                u.FLOAT,
                                !1,
                                0,
                                0
                              ),
                                t.isInstanced && u.vertexAttribDivisor(e, 1);
                            }),
                            u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, this.iBuffer));
                    }
                  },
                  {
                    key: "generateBuffers",
                    value: function(t) {
                      var e = this;
                      0 != this._bufferChanged.length &&
                        (this._useVAO
                          ? (this._vao || (this._vao = u.createVertexArray()),
                            u.bindVertexArray(this._vao),
                            this._attributes.forEach(function(n) {
                              if (-1 !== e._bufferChanged.indexOf(n.name)) {
                                var r = c(n);
                                u.bindBuffer(u.ARRAY_BUFFER, r),
                                  u.bufferData(
                                    u.ARRAY_BUFFER,
                                    n.dataArray,
                                    n.drawType
                                  );
                                var i = (0, s.default)(u, t, n.name);
                                u.enableVertexAttribArray(i),
                                  u.vertexAttribPointer(
                                    i,
                                    n.itemSize,
                                    u.FLOAT,
                                    !1,
                                    0,
                                    0
                                  ),
                                  (n.attrPosition = i),
                                  n.isInstanced && u.vertexAttribDivisor(i, 1);
                              }
                            }),
                            this._updateIndexBuffer(),
                            u.bindVertexArray(null),
                            (this._hasVAO = !0))
                          : (this._attributes.forEach(function(n) {
                              if (-1 !== e._bufferChanged.indexOf(n.name)) {
                                var r = c(n);
                                u.bindBuffer(u.ARRAY_BUFFER, r),
                                  u.bufferData(
                                    u.ARRAY_BUFFER,
                                    n.dataArray,
                                    n.drawType
                                  );
                                var i = (0, s.default)(u, t, n.name);
                                u.enableVertexAttribArray(i),
                                  u.vertexAttribPointer(
                                    i,
                                    n.itemSize,
                                    u.FLOAT,
                                    !1,
                                    0,
                                    0
                                  ),
                                  (n.attrPosition = i),
                                  n.isInstanced && u.vertexAttribDivisor(i, 1);
                              }
                            }),
                            this._updateIndexBuffer()),
                        (this._hasIndexBufferChanged = !1),
                        (this._bufferChanged = []));
                    }
                  },
                  {
                    key: "unbind",
                    value: function() {
                      this._useVAO && u.bindVertexArray(null),
                        this._attributes.forEach(function(t) {
                          t.isInstanced &&
                            u.vertexAttribDivisor(t.attrPosition, 0);
                        });
                    }
                  },
                  {
                    key: "_updateIndexBuffer",
                    value: function() {
                      this._hasIndexBufferChanged ||
                        (this.iBuffer || (this.iBuffer = u.createBuffer()),
                        u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, this.iBuffer),
                        u.bufferData(
                          u.ELEMENT_ARRAY_BUFFER,
                          this._indices,
                          this._drawType
                        ),
                        (this.iBuffer.itemSize = 1),
                        (this.iBuffer.numItems = this._numItems));
                    }
                  },
                  {
                    key: "computeNormals",
                    value: function() {
                      var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      this.generateFaces(),
                        t
                          ? this._computeFaceNormals()
                          : this._computeVertexNormals();
                    }
                  },
                  {
                    key: "_computeFaceNormals",
                    value: function() {
                      for (
                        var t = void 0, e = void 0, n = [], r = 0;
                        r < this._indices.length;
                        r += 3
                      ) {
                        t = r / 3;
                        var i = (e = this._faces[t]).normal;
                        (n[e.indices[0]] = i),
                          (n[e.indices[1]] = i),
                          (n[e.indices[2]] = i);
                      }
                      this.bufferNormal(n);
                    }
                  },
                  {
                    key: "_computeVertexNormals",
                    value: function() {
                      for (
                        var t = void 0,
                          e = o.vec3.create(),
                          n = [],
                          r = this.vertices,
                          i = 0;
                        i < r.length;
                        i++
                      ) {
                        o.vec3.set(e, 0, 0, 0);
                        for (var a = 0; a < this._faces.length; a++)
                          (t = this._faces[a]).indices.indexOf(i) >= 0 &&
                            ((e[0] += t.normal[0]),
                            (e[1] += t.normal[1]),
                            (e[2] += t.normal[2]));
                        o.vec3.normalize(e, e), n.push([e[0], e[1], e[2]]);
                      }
                      this.bufferNormal(n);
                    }
                  },
                  {
                    key: "generateFaces",
                    value: function() {
                      for (
                        var t = void 0,
                          e = void 0,
                          n = void 0,
                          r =
                            (o.vec3.create(),
                            o.vec3.create(),
                            o.vec3.create(),
                            this.vertices),
                          i = 0;
                        i < this._indices.length;
                        i += 3
                      ) {
                        var a = {
                          indices: [
                            (t = this._indices[i]),
                            (e = this._indices[i + 1]),
                            (n = this._indices[i + 2])
                          ],
                          vertices: [r[t], r[e], r[n]]
                        };
                        this._faces.push(a);
                      }
                    }
                  },
                  {
                    key: "getAttribute",
                    value: function(t) {
                      return this._attributes.find(function(e) {
                        return e.name === t;
                      });
                    }
                  },
                  {
                    key: "getSource",
                    value: function(t) {
                      var e = this.getAttribute(t);
                      return e ? e.source : [];
                    }
                  },
                  {
                    key: "vertices",
                    get: function() {
                      return this.getSource("aVertexPosition");
                    }
                  },
                  {
                    key: "normals",
                    get: function() {
                      return this.getSource("aNormal");
                    }
                  },
                  {
                    key: "coords",
                    get: function() {
                      return this.getSource("aTextureCoord");
                    }
                  },
                  {
                    key: "indices",
                    get: function() {
                      return this._indices;
                    }
                  },
                  {
                    key: "vertexSize",
                    get: function() {
                      return this.vertices.length;
                    }
                  },
                  {
                    key: "faces",
                    get: function() {
                      return this._faces;
                    }
                  },
                  {
                    key: "attributes",
                    get: function() {
                      return this._attributes;
                    }
                  },
                  {
                    key: "hasVAO",
                    get: function() {
                      return this._hasVAO;
                    }
                  },
                  {
                    key: "vao",
                    get: function() {
                      return this._vao;
                    }
                  },
                  {
                    key: "numInstance",
                    get: function() {
                      return this._numInstance;
                    }
                  },
                  {
                    key: "isInstanced",
                    get: function() {
                      return this._isInstanced;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = h;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(0),
            o = (r = a) && r.__esModule ? r : { default: r },
            s = (function() {
              function t(e, n) {
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._mesh = e),
                  (this._shader = n);
              }
              return (
                i(t, [
                  {
                    key: "draw",
                    value: function() {
                      this._shader.bind(), o.default.draw(this.mesh);
                    }
                  },
                  {
                    key: "mesh",
                    get: function() {
                      return this._mesh;
                    }
                  },
                  {
                    key: "shader",
                    get: function() {
                      return this._shader;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = s;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = n(5),
            a = (r = i) && r.__esModule ? r : { default: r },
            o = {},
            s = void 0;
          (o.plane = function(t, e, n) {
            for (
              var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "xy",
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 4,
                o = [],
                s = [],
                u = [],
                c = [],
                l = t / n,
                h = e / n,
                f = 1 / n,
                d = 0.5 * -t,
                _ = 0.5 * -e,
                p = 0,
                v = 0;
              v < n;
              v++
            )
              for (var E = 0; E < n; E++) {
                var m = l * v + d,
                  T = h * E + _,
                  b = v / n,
                  g = E / n;
                "xz" === r
                  ? (o.push([m, 0, T + h]),
                    o.push([m + l, 0, T + h]),
                    o.push([m + l, 0, T]),
                    o.push([m, 0, T]),
                    s.push([b, 1 - (g + f)]),
                    s.push([b + f, 1 - (g + f)]),
                    s.push([b + f, 1 - g]),
                    s.push([b, 1 - g]),
                    c.push([0, 1, 0]),
                    c.push([0, 1, 0]),
                    c.push([0, 1, 0]),
                    c.push([0, 1, 0]))
                  : "yz" === r
                  ? (o.push([0, T, m]),
                    o.push([0, T, m + l]),
                    o.push([0, T + h, m + l]),
                    o.push([0, T + h, m]),
                    s.push([b, g]),
                    s.push([b + f, g]),
                    s.push([b + f, g + f]),
                    s.push([b, g + f]),
                    c.push([1, 0, 0]),
                    c.push([1, 0, 0]),
                    c.push([1, 0, 0]),
                    c.push([1, 0, 0]))
                  : (o.push([m, T, 0]),
                    o.push([m + l, T, 0]),
                    o.push([m + l, T + h, 0]),
                    o.push([m, T + h, 0]),
                    s.push([b, g]),
                    s.push([b + f, g]),
                    s.push([b + f, g + f]),
                    s.push([b, g + f]),
                    c.push([0, 0, 1]),
                    c.push([0, 0, 1]),
                    c.push([0, 0, 1]),
                    c.push([0, 0, 1])),
                  u.push(4 * p + 0),
                  u.push(4 * p + 1),
                  u.push(4 * p + 2),
                  u.push(4 * p + 0),
                  u.push(4 * p + 2),
                  u.push(4 * p + 3),
                  p++;
              }
            var y = new a.default(i);
            return (
              y.bufferVertex(o),
              y.bufferTexCoord(s),
              y.bufferIndex(u),
              y.bufferNormal(c),
              y
            );
          }),
            (o.sphere = function(t, e) {
              function n(n, r) {
                var i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  a = (n / e) * Math.PI - 0.5 * Math.PI,
                  o = (r / e) * Math.PI * 2,
                  s = i ? 1 : t,
                  u = [];
                u[1] = Math.sin(a) * s;
                var c = Math.cos(a) * s;
                return (
                  (u[0] = Math.cos(o) * c),
                  (u[2] = Math.sin(o) * c),
                  (u[0] = Math.floor(1e4 * u[0]) / 1e4),
                  (u[1] = Math.floor(1e4 * u[1]) / 1e4),
                  (u[2] = Math.floor(1e4 * u[2]) / 1e4),
                  u
                );
              }
              for (
                var r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 4,
                  o = [],
                  s = [],
                  u = [],
                  c = [],
                  l = 1 / e,
                  h = 0,
                  f = 0;
                f < e;
                f++
              )
                for (var d = 0; d < e; d++) {
                  o.push(n(f, d)),
                    o.push(n(f + 1, d)),
                    o.push(n(f + 1, d + 1)),
                    o.push(n(f, d + 1)),
                    c.push(n(f, d, !0)),
                    c.push(n(f + 1, d, !0)),
                    c.push(n(f + 1, d + 1, !0)),
                    c.push(n(f, d + 1, !0));
                  var _ = d / e,
                    p = f / e;
                  s.push([1 - _, p]),
                    s.push([1 - _, p + l]),
                    s.push([1 - _ - l, p + l]),
                    s.push([1 - _ - l, p]),
                    u.push(4 * h + 0),
                    u.push(4 * h + 1),
                    u.push(4 * h + 2),
                    u.push(4 * h + 0),
                    u.push(4 * h + 2),
                    u.push(4 * h + 3),
                    h++;
                }
              r && u.reverse();
              var v = new a.default(i);
              return (
                v.bufferVertex(o),
                v.bufferTexCoord(s),
                v.bufferIndex(u),
                v.bufferNormal(c),
                v
              );
            }),
            (o.cube = function(t, e, n) {
              var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 4,
                i = t / 2,
                o = (e = e || t) / 2,
                s = (n = n || t) / 2,
                u = [],
                c = [],
                l = [],
                h = [],
                f = 0;
              u.push([-i, o, -s]),
                u.push([i, o, -s]),
                u.push([i, -o, -s]),
                u.push([-i, -o, -s]),
                h.push([0, 0, -1]),
                h.push([0, 0, -1]),
                h.push([0, 0, -1]),
                h.push([0, 0, -1]),
                c.push([0, 0]),
                c.push([1, 0]),
                c.push([1, 1]),
                c.push([0, 1]),
                l.push(4 * f + 0),
                l.push(4 * f + 1),
                l.push(4 * f + 2),
                l.push(4 * f + 0),
                l.push(4 * f + 2),
                l.push(4 * f + 3),
                f++,
                u.push([i, o, -s]),
                u.push([i, o, s]),
                u.push([i, -o, s]),
                u.push([i, -o, -s]),
                h.push([1, 0, 0]),
                h.push([1, 0, 0]),
                h.push([1, 0, 0]),
                h.push([1, 0, 0]),
                c.push([0, 0]),
                c.push([1, 0]),
                c.push([1, 1]),
                c.push([0, 1]),
                l.push(4 * f + 0),
                l.push(4 * f + 1),
                l.push(4 * f + 2),
                l.push(4 * f + 0),
                l.push(4 * f + 2),
                l.push(4 * f + 3),
                f++,
                u.push([i, o, s]),
                u.push([-i, o, s]),
                u.push([-i, -o, s]),
                u.push([i, -o, s]),
                h.push([0, 0, 1]),
                h.push([0, 0, 1]),
                h.push([0, 0, 1]),
                h.push([0, 0, 1]),
                c.push([0, 0]),
                c.push([1, 0]),
                c.push([1, 1]),
                c.push([0, 1]),
                l.push(4 * f + 0),
                l.push(4 * f + 1),
                l.push(4 * f + 2),
                l.push(4 * f + 0),
                l.push(4 * f + 2),
                l.push(4 * f + 3),
                f++,
                u.push([-i, o, s]),
                u.push([-i, o, -s]),
                u.push([-i, -o, -s]),
                u.push([-i, -o, s]),
                h.push([-1, 0, 0]),
                h.push([-1, 0, 0]),
                h.push([-1, 0, 0]),
                h.push([-1, 0, 0]),
                c.push([0, 0]),
                c.push([1, 0]),
                c.push([1, 1]),
                c.push([0, 1]),
                l.push(4 * f + 0),
                l.push(4 * f + 1),
                l.push(4 * f + 2),
                l.push(4 * f + 0),
                l.push(4 * f + 2),
                l.push(4 * f + 3),
                f++,
                u.push([i, o, -s]),
                u.push([-i, o, -s]),
                u.push([-i, o, s]),
                u.push([i, o, s]),
                h.push([0, 1, 0]),
                h.push([0, 1, 0]),
                h.push([0, 1, 0]),
                h.push([0, 1, 0]),
                c.push([0, 0]),
                c.push([1, 0]),
                c.push([1, 1]),
                c.push([0, 1]),
                l.push(4 * f + 0),
                l.push(4 * f + 1),
                l.push(4 * f + 2),
                l.push(4 * f + 0),
                l.push(4 * f + 2),
                l.push(4 * f + 3),
                f++,
                u.push([i, -o, s]),
                u.push([-i, -o, s]),
                u.push([-i, -o, -s]),
                u.push([i, -o, -s]),
                h.push([0, -1, 0]),
                h.push([0, -1, 0]),
                h.push([0, -1, 0]),
                h.push([0, -1, 0]),
                c.push([0, 0]),
                c.push([1, 0]),
                c.push([1, 1]),
                c.push([0, 1]),
                l.push(4 * f + 0),
                l.push(4 * f + 1),
                l.push(4 * f + 2),
                l.push(4 * f + 0),
                l.push(4 * f + 2),
                l.push(4 * f + 3),
                f++;
              var d = new a.default(r);
              return (
                d.bufferVertex(u),
                d.bufferTexCoord(c),
                d.bufferIndex(l),
                d.bufferNormal(h),
                d
              );
            }),
            (o.skybox = function(t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 4,
                n = [],
                r = [],
                i = [],
                o = [],
                s = 0;
              n.push([t, t, -t]),
                n.push([-t, t, -t]),
                n.push([-t, -t, -t]),
                n.push([t, -t, -t]),
                o.push([0, 0, -1]),
                o.push([0, 0, -1]),
                o.push([0, 0, -1]),
                o.push([0, 0, -1]),
                r.push([0, 0]),
                r.push([1, 0]),
                r.push([1, 1]),
                r.push([0, 1]),
                i.push(4 * s + 0),
                i.push(4 * s + 1),
                i.push(4 * s + 2),
                i.push(4 * s + 0),
                i.push(4 * s + 2),
                i.push(4 * s + 3),
                s++,
                n.push([t, -t, -t]),
                n.push([t, -t, t]),
                n.push([t, t, t]),
                n.push([t, t, -t]),
                o.push([1, 0, 0]),
                o.push([1, 0, 0]),
                o.push([1, 0, 0]),
                o.push([1, 0, 0]),
                r.push([0, 0]),
                r.push([1, 0]),
                r.push([1, 1]),
                r.push([0, 1]),
                i.push(4 * s + 0),
                i.push(4 * s + 1),
                i.push(4 * s + 2),
                i.push(4 * s + 0),
                i.push(4 * s + 2),
                i.push(4 * s + 3),
                s++,
                n.push([-t, t, t]),
                n.push([t, t, t]),
                n.push([t, -t, t]),
                n.push([-t, -t, t]),
                o.push([0, 0, 1]),
                o.push([0, 0, 1]),
                o.push([0, 0, 1]),
                o.push([0, 0, 1]),
                r.push([0, 0]),
                r.push([1, 0]),
                r.push([1, 1]),
                r.push([0, 1]),
                i.push(4 * s + 0),
                i.push(4 * s + 1),
                i.push(4 * s + 2),
                i.push(4 * s + 0),
                i.push(4 * s + 2),
                i.push(4 * s + 3),
                s++,
                n.push([-t, -t, t]),
                n.push([-t, -t, -t]),
                n.push([-t, t, -t]),
                n.push([-t, t, t]),
                o.push([-1, 0, 0]),
                o.push([-1, 0, 0]),
                o.push([-1, 0, 0]),
                o.push([-1, 0, 0]),
                r.push([0, 0]),
                r.push([1, 0]),
                r.push([1, 1]),
                r.push([0, 1]),
                i.push(4 * s + 0),
                i.push(4 * s + 1),
                i.push(4 * s + 2),
                i.push(4 * s + 0),
                i.push(4 * s + 2),
                i.push(4 * s + 3),
                s++,
                n.push([t, t, t]),
                n.push([-t, t, t]),
                n.push([-t, t, -t]),
                n.push([t, t, -t]),
                o.push([0, 1, 0]),
                o.push([0, 1, 0]),
                o.push([0, 1, 0]),
                o.push([0, 1, 0]),
                r.push([0, 0]),
                r.push([1, 0]),
                r.push([1, 1]),
                r.push([0, 1]),
                i.push(4 * s + 0),
                i.push(4 * s + 1),
                i.push(4 * s + 2),
                i.push(4 * s + 0),
                i.push(4 * s + 2),
                i.push(4 * s + 3),
                s++,
                n.push([t, -t, -t]),
                n.push([-t, -t, -t]),
                n.push([-t, -t, t]),
                n.push([t, -t, t]),
                o.push([0, -1, 0]),
                o.push([0, -1, 0]),
                o.push([0, -1, 0]),
                o.push([0, -1, 0]),
                r.push([0, 0]),
                r.push([1, 0]),
                r.push([1, 1]),
                r.push([0, 1]),
                i.push(4 * s + 0),
                i.push(4 * s + 1),
                i.push(4 * s + 2),
                i.push(4 * s + 0),
                i.push(4 * s + 2),
                i.push(4 * s + 3);
              var u = new a.default(e);
              return (
                u.bufferVertex(n),
                u.bufferTexCoord(r),
                u.bufferIndex(i),
                u.bufferNormal(o),
                u
              );
            }),
            (o.bigTriangle = function() {
              return (
                s ||
                  ((s = new a.default()).bufferData(
                    [
                      [-1, -1],
                      [-1, 4],
                      [4, -1]
                    ],
                    "aPosition",
                    2
                  ),
                  s.bufferIndex([2, 1, 0])),
                s
              );
            }),
            (e.default = o);
        },
        function(t, e, n) {
          "use strict";
          t.exports = {
            0: "NONE",
            1: "ONE",
            2: "LINE_LOOP",
            3: "LINE_STRIP",
            4: "TRIANGLES",
            5: "TRIANGLE_STRIP",
            6: "TRIANGLE_FAN",
            256: "DEPTH_BUFFER_BIT",
            512: "NEVER",
            513: "LESS",
            514: "EQUAL",
            515: "LEQUAL",
            516: "GREATER",
            517: "NOTEQUAL",
            518: "GEQUAL",
            519: "ALWAYS",
            768: "SRC_COLOR",
            769: "ONE_MINUS_SRC_COLOR",
            770: "SRC_ALPHA",
            771: "ONE_MINUS_SRC_ALPHA",
            772: "DST_ALPHA",
            773: "ONE_MINUS_DST_ALPHA",
            774: "DST_COLOR",
            775: "ONE_MINUS_DST_COLOR",
            776: "SRC_ALPHA_SATURATE",
            1024: "STENCIL_BUFFER_BIT",
            1028: "FRONT",
            1029: "BACK",
            1032: "FRONT_AND_BACK",
            1280: "INVALID_ENUM",
            1281: "INVALID_VALUE",
            1282: "INVALID_OPERATION",
            1285: "OUT_OF_MEMORY",
            1286: "INVALID_FRAMEBUFFER_OPERATION",
            2304: "CW",
            2305: "CCW",
            2849: "LINE_WIDTH",
            2884: "CULL_FACE",
            2885: "CULL_FACE_MODE",
            2886: "FRONT_FACE",
            2928: "DEPTH_RANGE",
            2929: "DEPTH_TEST",
            2930: "DEPTH_WRITEMASK",
            2931: "DEPTH_CLEAR_VALUE",
            2932: "DEPTH_FUNC",
            2960: "STENCIL_TEST",
            2961: "STENCIL_CLEAR_VALUE",
            2962: "STENCIL_FUNC",
            2963: "STENCIL_VALUE_MASK",
            2964: "STENCIL_FAIL",
            2965: "STENCIL_PASS_DEPTH_FAIL",
            2966: "STENCIL_PASS_DEPTH_PASS",
            2967: "STENCIL_REF",
            2968: "STENCIL_WRITEMASK",
            2978: "VIEWPORT",
            3024: "DITHER",
            3042: "BLEND",
            3088: "SCISSOR_BOX",
            3089: "SCISSOR_TEST",
            3106: "COLOR_CLEAR_VALUE",
            3107: "COLOR_WRITEMASK",
            3317: "UNPACK_ALIGNMENT",
            3333: "PACK_ALIGNMENT",
            3379: "MAX_TEXTURE_SIZE",
            3386: "MAX_VIEWPORT_DIMS",
            3408: "SUBPIXEL_BITS",
            3410: "RED_BITS",
            3411: "GREEN_BITS",
            3412: "BLUE_BITS",
            3413: "ALPHA_BITS",
            3414: "DEPTH_BITS",
            3415: "STENCIL_BITS",
            3553: "TEXTURE_2D",
            4352: "DONT_CARE",
            4353: "FASTEST",
            4354: "NICEST",
            5120: "BYTE",
            5121: "UNSIGNED_BYTE",
            5122: "SHORT",
            5123: "UNSIGNED_SHORT",
            5124: "INT",
            5125: "UNSIGNED_INT",
            5126: "FLOAT",
            5386: "INVERT",
            5890: "TEXTURE",
            6401: "STENCIL_INDEX",
            6402: "DEPTH_COMPONENT",
            6403: "RED",
            6406: "ALPHA",
            6407: "RGB",
            6408: "RGBA",
            6409: "LUMINANCE",
            6410: "LUMINANCE_ALPHA",
            7680: "KEEP",
            7681: "REPLACE",
            7682: "INCR",
            7683: "DECR",
            7936: "VENDOR",
            7937: "RENDERER",
            7938: "VERSION",
            9728: "NEAREST",
            9729: "LINEAR",
            9984: "NEAREST_MIPMAP_NEAREST",
            9985: "LINEAR_MIPMAP_NEAREST",
            9986: "NEAREST_MIPMAP_LINEAR",
            9987: "LINEAR_MIPMAP_LINEAR",
            10240: "TEXTURE_MAG_FILTER",
            10241: "TEXTURE_MIN_FILTER",
            10242: "TEXTURE_WRAP_S",
            10243: "TEXTURE_WRAP_T",
            10497: "REPEAT",
            10752: "POLYGON_OFFSET_UNITS",
            16384: "COLOR_BUFFER_BIT",
            32769: "CONSTANT_COLOR",
            32770: "ONE_MINUS_CONSTANT_COLOR",
            32771: "CONSTANT_ALPHA",
            32772: "ONE_MINUS_CONSTANT_ALPHA",
            32773: "BLEND_COLOR",
            32774: "FUNC_ADD",
            32777: "BLEND_EQUATION_RGB",
            32778: "FUNC_SUBTRACT",
            32779: "FUNC_REVERSE_SUBTRACT",
            32819: "UNSIGNED_SHORT_4_4_4_4",
            32820: "UNSIGNED_SHORT_5_5_5_1",
            32823: "POLYGON_OFFSET_FILL",
            32824: "POLYGON_OFFSET_FACTOR",
            32854: "RGBA4",
            32855: "RGB5_A1",
            32873: "TEXTURE_BINDING_2D",
            32926: "SAMPLE_ALPHA_TO_COVERAGE",
            32928: "SAMPLE_COVERAGE",
            32936: "SAMPLE_BUFFERS",
            32937: "SAMPLES",
            32938: "SAMPLE_COVERAGE_VALUE",
            32939: "SAMPLE_COVERAGE_INVERT",
            32968: "BLEND_DST_RGB",
            32969: "BLEND_SRC_RGB",
            32970: "BLEND_DST_ALPHA",
            32971: "BLEND_SRC_ALPHA",
            33071: "CLAMP_TO_EDGE",
            33170: "GENERATE_MIPMAP_HINT",
            33189: "DEPTH_COMPONENT16",
            33306: "DEPTH_STENCIL_ATTACHMENT",
            33321: "R8",
            33635: "UNSIGNED_SHORT_5_6_5",
            33648: "MIRRORED_REPEAT",
            33901: "ALIASED_POINT_SIZE_RANGE",
            33902: "ALIASED_LINE_WIDTH_RANGE",
            33984: "TEXTURE0",
            33985: "TEXTURE1",
            33986: "TEXTURE2",
            33987: "TEXTURE3",
            33988: "TEXTURE4",
            33989: "TEXTURE5",
            33990: "TEXTURE6",
            33991: "TEXTURE7",
            33992: "TEXTURE8",
            33993: "TEXTURE9",
            33994: "TEXTURE10",
            33995: "TEXTURE11",
            33996: "TEXTURE12",
            33997: "TEXTURE13",
            33998: "TEXTURE14",
            33999: "TEXTURE15",
            34e3: "TEXTURE16",
            34001: "TEXTURE17",
            34002: "TEXTURE18",
            34003: "TEXTURE19",
            34004: "TEXTURE20",
            34005: "TEXTURE21",
            34006: "TEXTURE22",
            34007: "TEXTURE23",
            34008: "TEXTURE24",
            34009: "TEXTURE25",
            34010: "TEXTURE26",
            34011: "TEXTURE27",
            34012: "TEXTURE28",
            34013: "TEXTURE29",
            34014: "TEXTURE30",
            34015: "TEXTURE31",
            34016: "ACTIVE_TEXTURE",
            34024: "MAX_RENDERBUFFER_SIZE",
            34041: "DEPTH_STENCIL",
            34055: "INCR_WRAP",
            34056: "DECR_WRAP",
            34067: "TEXTURE_CUBE_MAP",
            34068: "TEXTURE_BINDING_CUBE_MAP",
            34069: "TEXTURE_CUBE_MAP_POSITIVE_X",
            34070: "TEXTURE_CUBE_MAP_NEGATIVE_X",
            34071: "TEXTURE_CUBE_MAP_POSITIVE_Y",
            34072: "TEXTURE_CUBE_MAP_NEGATIVE_Y",
            34073: "TEXTURE_CUBE_MAP_POSITIVE_Z",
            34074: "TEXTURE_CUBE_MAP_NEGATIVE_Z",
            34076: "MAX_CUBE_MAP_TEXTURE_SIZE",
            34338: "VERTEX_ATTRIB_ARRAY_ENABLED",
            34339: "VERTEX_ATTRIB_ARRAY_SIZE",
            34340: "VERTEX_ATTRIB_ARRAY_STRIDE",
            34341: "VERTEX_ATTRIB_ARRAY_TYPE",
            34342: "CURRENT_VERTEX_ATTRIB",
            34373: "VERTEX_ATTRIB_ARRAY_POINTER",
            34466: "NUM_COMPRESSED_TEXTURE_FORMATS",
            34467: "COMPRESSED_TEXTURE_FORMATS",
            34660: "BUFFER_SIZE",
            34661: "BUFFER_USAGE",
            34816: "STENCIL_BACK_FUNC",
            34817: "STENCIL_BACK_FAIL",
            34818: "STENCIL_BACK_PASS_DEPTH_FAIL",
            34819: "STENCIL_BACK_PASS_DEPTH_PASS",
            34877: "BLEND_EQUATION_ALPHA",
            34921: "MAX_VERTEX_ATTRIBS",
            34922: "VERTEX_ATTRIB_ARRAY_NORMALIZED",
            34930: "MAX_TEXTURE_IMAGE_UNITS",
            34962: "ARRAY_BUFFER",
            34963: "ELEMENT_ARRAY_BUFFER",
            34964: "ARRAY_BUFFER_BINDING",
            34965: "ELEMENT_ARRAY_BUFFER_BINDING",
            34975: "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",
            35040: "STREAM_DRAW",
            35044: "STATIC_DRAW",
            35048: "DYNAMIC_DRAW",
            35632: "FRAGMENT_SHADER",
            35633: "VERTEX_SHADER",
            35660: "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
            35661: "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
            35663: "SHADER_TYPE",
            35664: "FLOAT_VEC2",
            35665: "FLOAT_VEC3",
            35666: "FLOAT_VEC4",
            35667: "INT_VEC2",
            35668: "INT_VEC3",
            35669: "INT_VEC4",
            35670: "BOOL",
            35671: "BOOL_VEC2",
            35672: "BOOL_VEC3",
            35673: "BOOL_VEC4",
            35674: "FLOAT_MAT2",
            35675: "FLOAT_MAT3",
            35676: "FLOAT_MAT4",
            35678: "SAMPLER_2D",
            35680: "SAMPLER_CUBE",
            35712: "DELETE_STATUS",
            35713: "COMPILE_STATUS",
            35714: "LINK_STATUS",
            35715: "VALIDATE_STATUS",
            35716: "INFO_LOG_LENGTH",
            35717: "ATTACHED_SHADERS",
            35718: "ACTIVE_UNIFORMS",
            35719: "ACTIVE_UNIFORM_MAX_LENGTH",
            35720: "SHADER_SOURCE_LENGTH",
            35721: "ACTIVE_ATTRIBUTES",
            35722: "ACTIVE_ATTRIBUTE_MAX_LENGTH",
            35724: "SHADING_LANGUAGE_VERSION",
            35725: "CURRENT_PROGRAM",
            36003: "STENCIL_BACK_REF",
            36004: "STENCIL_BACK_VALUE_MASK",
            36005: "STENCIL_BACK_WRITEMASK",
            36006: "FRAMEBUFFER_BINDING",
            36007: "RENDERBUFFER_BINDING",
            36048: "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",
            36049: "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",
            36050: "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",
            36051: "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",
            36053: "FRAMEBUFFER_COMPLETE",
            36054: "FRAMEBUFFER_INCOMPLETE_ATTACHMENT",
            36055: "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",
            36057: "FRAMEBUFFER_INCOMPLETE_DIMENSIONS",
            36061: "FRAMEBUFFER_UNSUPPORTED",
            36064: "COLOR_ATTACHMENT0",
            36096: "DEPTH_ATTACHMENT",
            36128: "STENCIL_ATTACHMENT",
            36160: "FRAMEBUFFER",
            36161: "RENDERBUFFER",
            36162: "RENDERBUFFER_WIDTH",
            36163: "RENDERBUFFER_HEIGHT",
            36164: "RENDERBUFFER_INTERNAL_FORMAT",
            36168: "STENCIL_INDEX8",
            36176: "RENDERBUFFER_RED_SIZE",
            36177: "RENDERBUFFER_GREEN_SIZE",
            36178: "RENDERBUFFER_BLUE_SIZE",
            36179: "RENDERBUFFER_ALPHA_SIZE",
            36180: "RENDERBUFFER_DEPTH_SIZE",
            36181: "RENDERBUFFER_STENCIL_SIZE",
            36194: "RGB565",
            36336: "LOW_FLOAT",
            36337: "MEDIUM_FLOAT",
            36338: "HIGH_FLOAT",
            36339: "LOW_INT",
            36340: "MEDIUM_INT",
            36341: "HIGH_INT",
            36346: "SHADER_COMPILER",
            36347: "MAX_VERTEX_UNIFORM_VECTORS",
            36348: "MAX_VARYING_VECTORS",
            36349: "MAX_FRAGMENT_UNIFORM_VECTORS",
            37440: "UNPACK_FLIP_Y_WEBGL",
            37441: "UNPACK_PREMULTIPLY_ALPHA_WEBGL",
            37442: "CONTEXT_LOST_WEBGL",
            37443: "UNPACK_COLORSPACE_CONVERSION_WEBGL",
            37444: "BROWSER_DEFAULT_WEBGL"
          };
        },
        function(t, e) {
          t.exports =
            "// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}";
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(4),
            o = (r = a) && r.__esModule ? r : { default: r },
            s = (function() {
              function t(e) {
                var n = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0.1;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this.easing = r),
                  (this._value = e),
                  (this._targetValue = e),
                  (this._efIndex = o.default.addEF(function() {
                    return n._update();
                  }));
              }
              return (
                i(t, [
                  {
                    key: "_update",
                    value: function() {
                      this._checkLimit(),
                        (this._value +=
                          (this._targetValue - this._value) * this.easing),
                        Math.abs(this._targetValue - this._value) < 1e-4 &&
                          (this._value = this._targetValue);
                    }
                  },
                  {
                    key: "setTo",
                    value: function(t) {
                      this._targetValue = this._value = t;
                    }
                  },
                  {
                    key: "add",
                    value: function(t) {
                      this._targetValue += t;
                    }
                  },
                  {
                    key: "limit",
                    value: function(t, e) {
                      t > e
                        ? this.limit(e, t)
                        : ((this._min = t),
                          (this._max = e),
                          this._checkLimit());
                    }
                  },
                  {
                    key: "_checkLimit",
                    value: function() {
                      void 0 !== this._min &&
                        this._targetValue < this._min &&
                        (this._targetValue = this._min),
                        void 0 !== this._max &&
                          this._targetValue > this._max &&
                          (this._targetValue = this._max);
                    }
                  },
                  {
                    key: "destroy",
                    value: function() {
                      o.default.removeEF(this._efIndex);
                    }
                  },
                  {
                    key: "value",
                    set: function(t) {
                      this._targetValue = t;
                    },
                    get: function() {
                      return this._value;
                    }
                  },
                  {
                    key: "targetValue",
                    get: function() {
                      return this._targetValue;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = s;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            i = n(2),
            a = i.vec3.create(),
            o = i.vec3.create(),
            s = i.vec3.create(),
            u = i.vec3.create(),
            c = i.vec3.create(),
            l = i.vec3.create(),
            h = i.vec3.create(),
            f = i.vec3.create(),
            d = (function() {
              function t(e, n) {
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this.origin = i.vec3.clone(e)),
                  (this.direction = i.vec3.clone(n));
              }
              return (
                r(t, [
                  {
                    key: "at",
                    value: function(t) {
                      return (
                        i.vec3.copy(u, this.direction),
                        i.vec3.scale(u, u, t),
                        i.vec3.add(u, u, this.origin),
                        u
                      );
                    }
                  },
                  {
                    key: "lookAt",
                    value: function(t) {
                      i.vec3.sub(this.direction, t, this.origin),
                        i.vec3.normalize(this.origin, this.origin);
                    }
                  },
                  {
                    key: "closestPointToPoint",
                    value: function(t) {
                      var e = i.vec3.create();
                      i.vec3.sub(t, this.origin);
                      var n = i.vec3.dot(e, this.direction);
                      return n < 0
                        ? i.vec3.clone(this.origin)
                        : (i.vec3.copy(e, this.direction),
                          i.vec3.scale(e, e, n),
                          i.vec3.add(e, e, this.origin),
                          e);
                    }
                  },
                  {
                    key: "distanceToPoint",
                    value: function(t) {
                      return Math.sqrt(this.distanceSqToPoint(t));
                    }
                  },
                  {
                    key: "distanceSqToPoint",
                    value: function(t) {
                      var e = i.vec3.create();
                      i.vec3.sub(e, t, this.origin);
                      var n = i.vec3.dot(e, this.direction);
                      return n < 0
                        ? i.vec3.squaredDistance(this.origin, t)
                        : (i.vec3.copy(e, this.direction),
                          i.vec3.scale(e, e, n),
                          i.vec3.add(e, e, this.origin),
                          i.vec3.squaredDistance(e, t));
                    }
                  },
                  {
                    key: "intersectsSphere",
                    value: function(t, e) {
                      return this.distanceToPoint(t) <= e;
                    }
                  },
                  {
                    key: "intersectSphere",
                    value: function(t, e) {
                      var n = i.vec3.create();
                      i.vec3.sub(n, t, this.origin);
                      var r = i.vec3.dot(n, this.direction),
                        a = i.vec3.dot(n, n) - r * r,
                        o = e * e;
                      if (a > o) return null;
                      var s = Math.sqrt(o - a),
                        u = r - s,
                        c = r + s;
                      return u < 0 && c < 0
                        ? null
                        : u < 0
                        ? this.at(c)
                        : this.at(u);
                    }
                  },
                  {
                    key: "distanceToPlane",
                    value: function(t, e) {
                      i.vec3.dot(e, this.direction);
                    }
                  },
                  {
                    key: "intersectTriangle",
                    value: function(t, e, n) {
                      var r =
                        !(arguments.length > 3 && void 0 !== arguments[3]) ||
                        arguments[3];
                      i.vec3.copy(a, t),
                        i.vec3.copy(o, e),
                        i.vec3.copy(s, n),
                        i.vec3.sub(c, o, a),
                        i.vec3.sub(l, s, a),
                        i.vec3.cross(h, c, l);
                      var u = i.vec3.dot(this.direction, h),
                        d = void 0;
                      if (u > 0) {
                        if (r) return null;
                        d = 1;
                      } else {
                        if (!(u < 0)) return null;
                        (d = -1), (u = -u);
                      }
                      i.vec3.sub(f, this.origin, a), i.vec3.cross(l, f, l);
                      var _ = d * i.vec3.dot(this.direction, l);
                      if (_ < 0) return null;
                      i.vec3.cross(c, c, f);
                      var p = d * i.vec3.dot(this.direction, c);
                      if (p < 0) return null;
                      if (_ + p > u) return null;
                      var v = -d * i.vec3.dot(f, h);
                      return v < 0 ? null : this.at(v / u);
                    }
                  }
                ]),
                t
              );
            })();
          e.default = d;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            i = n(2),
            a = (function() {
              function t() {
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._matrix = i.mat4.create()),
                  (this._quat = i.quat.create()),
                  (this._orientation = i.mat4.create()),
                  (this._projection = i.mat4.create()),
                  (this.position = vec3.create());
              }
              return (
                r(t, [
                  {
                    key: "lookAt",
                    value: function(t, e) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : [0, 1, 0];
                      (this._eye = vec3.clone(t)),
                        (this._center = vec3.clone(e)),
                        vec3.copy(this.position, t),
                        i.mat4.identity(this._matrix),
                        i.mat4.lookAt(this._matrix, t, e, n);
                    }
                  },
                  {
                    key: "setFromOrientation",
                    value: function(t, e, n, r) {
                      i.quat.set(this._quat, t, e, n, r),
                        i.mat4.fromQuat(this._orientation, this._quat),
                        i.mat4.translate(
                          this._matrix,
                          this._orientation,
                          this.positionOffset
                        );
                    }
                  },
                  {
                    key: "setProjection",
                    value: function(t) {
                      this._projection = i.mat4.clone(t);
                    }
                  },
                  {
                    key: "setView",
                    value: function(t) {
                      this._matrix = i.mat4.clone(t);
                    }
                  },
                  {
                    key: "setFromViewProj",
                    value: function(t, e) {
                      this.setView(t), this.setProjection(e);
                    }
                  },
                  {
                    key: "matrix",
                    get: function() {
                      return this._matrix;
                    }
                  },
                  {
                    key: "viewMatrix",
                    get: function() {
                      return this._matrix;
                    }
                  },
                  {
                    key: "projection",
                    get: function() {
                      return this._projection;
                    }
                  },
                  {
                    key: "projectionMatrix",
                    get: function() {
                      return this._projection;
                    }
                  },
                  {
                    key: "eye",
                    get: function() {
                      return this._eye;
                    }
                  },
                  {
                    key: "center",
                    get: function() {
                      return this._center;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = a;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(12)),
            o = r(n(11)),
            s = n(2),
            u = s.mat4.create(),
            c = s.vec3.create(),
            l = (function(t) {
              function e(t, n, r, i) {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var a = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t && a.setPerspective(t, n, r, i), a;
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "setPerspective",
                    value: function(t, e, n, r) {
                      (this._fov = t),
                        (this._near = n),
                        (this._far = r),
                        (this._aspectRatio = e),
                        s.mat4.perspective(this._projection, t, e, n, r);
                    }
                  },
                  {
                    key: "setAspectRatio",
                    value: function(t) {
                      (this._aspectRatio = t),
                        s.mat4.perspective(
                          this.projection,
                          this._fov,
                          t,
                          this._near,
                          this._far
                        );
                    }
                  },
                  {
                    key: "generateRay",
                    value: function(t, e) {
                      var n = this.projectionMatrix,
                        r = this.viewMatrix;
                      return (
                        s.mat4.multiply(u, n, r),
                        s.mat4.invert(u, u),
                        s.vec3.transformMat4(c, t, u),
                        s.vec3.sub(c, c, this.position),
                        s.vec3.normalize(c, c),
                        e
                          ? ((e.origin = this.position), (e.direction = c))
                          : (e = new o.default(this.position, c)),
                        e
                      );
                    }
                  }
                ]),
                e
              );
            })(a.default);
          e.default = l;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            i = (function() {
              function t() {
                var e = this,
                  n =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._req = new XMLHttpRequest()),
                  this._req.addEventListener("load", function(t) {
                    return e._onLoaded(t);
                  }),
                  this._req.addEventListener("progress", function(t) {
                    return e._onProgress(t);
                  }),
                  n && (this._req.responseType = "arraybuffer");
              }
              return (
                r(t, [
                  {
                    key: "load",
                    value: function(t, e) {
                      console.log("Loading : ", t),
                        (this._callback = e),
                        this._req.open("GET", t),
                        this._req.send();
                    }
                  },
                  {
                    key: "_onLoaded",
                    value: function() {
                      this._callback(this._req.response);
                    }
                  },
                  { key: "_onProgress", value: function() {} }
                ]),
                t
              );
            })();
          e.default = i;
        },
        function(t, e) {
          t.exports =
            "// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}";
        },
        function(t, e) {
          t.exports =
            "// copy.frag\n\n#define SHADER_NAME COPY_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}";
        },
        function(t, e) {
          t.exports =
            "// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}";
        },
        function(t, e, n) {
          "use strict";
          function r(t, e, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[3],
              s = e[4],
              u = e[5],
              c = e[6],
              l = e[7],
              h = e[8],
              f = n[0],
              d = n[1],
              _ = n[2],
              p = n[3],
              v = n[4],
              E = n[5],
              m = n[6],
              T = n[7],
              b = n[8];
            return (
              (t[0] = f * r + d * o + _ * c),
              (t[1] = f * i + d * s + _ * l),
              (t[2] = f * a + d * u + _ * h),
              (t[3] = p * r + v * o + E * c),
              (t[4] = p * i + v * s + E * l),
              (t[5] = p * a + v * u + E * h),
              (t[6] = m * r + T * o + b * c),
              (t[7] = m * i + T * s + b * l),
              (t[8] = m * a + T * u + b * h),
              t
            );
          }
          function i(t, e, n) {
            return (
              (t[0] = e[0] - n[0]),
              (t[1] = e[1] - n[1]),
              (t[2] = e[2] - n[2]),
              (t[3] = e[3] - n[3]),
              (t[4] = e[4] - n[4]),
              (t[5] = e[5] - n[5]),
              (t[6] = e[6] - n[6]),
              (t[7] = e[7] - n[7]),
              (t[8] = e[8] - n[8]),
              t
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.sub = e.mul = void 0),
            (e.create = function() {
              var t = new a.ARRAY_TYPE(9);
              return (
                a.ARRAY_TYPE != Float32Array &&
                  ((t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[5] = 0),
                  (t[6] = 0),
                  (t[7] = 0)),
                (t[0] = 1),
                (t[4] = 1),
                (t[8] = 1),
                t
              );
            }),
            (e.fromMat4 = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[4]),
                (t[4] = e[5]),
                (t[5] = e[6]),
                (t[6] = e[8]),
                (t[7] = e[9]),
                (t[8] = e[10]),
                t
              );
            }),
            (e.clone = function(t) {
              var e = new a.ARRAY_TYPE(9);
              return (
                (e[0] = t[0]),
                (e[1] = t[1]),
                (e[2] = t[2]),
                (e[3] = t[3]),
                (e[4] = t[4]),
                (e[5] = t[5]),
                (e[6] = t[6]),
                (e[7] = t[7]),
                (e[8] = t[8]),
                e
              );
            }),
            (e.copy = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[3]),
                (t[4] = e[4]),
                (t[5] = e[5]),
                (t[6] = e[6]),
                (t[7] = e[7]),
                (t[8] = e[8]),
                t
              );
            }),
            (e.fromValues = function(t, e, n, r, i, o, s, u, c) {
              var l = new a.ARRAY_TYPE(9);
              return (
                (l[0] = t),
                (l[1] = e),
                (l[2] = n),
                (l[3] = r),
                (l[4] = i),
                (l[5] = o),
                (l[6] = s),
                (l[7] = u),
                (l[8] = c),
                l
              );
            }),
            (e.set = function(t, e, n, r, i, a, o, s, u, c) {
              return (
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = i),
                (t[4] = a),
                (t[5] = o),
                (t[6] = s),
                (t[7] = u),
                (t[8] = c),
                t
              );
            }),
            (e.identity = function(t) {
              return (
                (t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 1),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 1),
                t
              );
            }),
            (e.transpose = function(t, e) {
              if (t === e) {
                var n = e[1],
                  r = e[2],
                  i = e[5];
                (t[1] = e[3]),
                  (t[2] = e[6]),
                  (t[3] = n),
                  (t[5] = e[7]),
                  (t[6] = r),
                  (t[7] = i);
              } else
                (t[0] = e[0]),
                  (t[1] = e[3]),
                  (t[2] = e[6]),
                  (t[3] = e[1]),
                  (t[4] = e[4]),
                  (t[5] = e[7]),
                  (t[6] = e[2]),
                  (t[7] = e[5]),
                  (t[8] = e[8]);
              return t;
            }),
            (e.invert = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = e[4],
                s = e[5],
                u = e[6],
                c = e[7],
                l = e[8],
                h = l * o - s * c,
                f = -l * a + s * u,
                d = c * a - o * u,
                _ = n * h + r * f + i * d;
              return _
                ? ((_ = 1 / _),
                  (t[0] = h * _),
                  (t[1] = (-l * r + i * c) * _),
                  (t[2] = (s * r - i * o) * _),
                  (t[3] = f * _),
                  (t[4] = (l * n - i * u) * _),
                  (t[5] = (-s * n + i * a) * _),
                  (t[6] = d * _),
                  (t[7] = (-c * n + r * u) * _),
                  (t[8] = (o * n - r * a) * _),
                  t)
                : null;
            }),
            (e.adjoint = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = e[4],
                s = e[5],
                u = e[6],
                c = e[7],
                l = e[8];
              return (
                (t[0] = o * l - s * c),
                (t[1] = i * c - r * l),
                (t[2] = r * s - i * o),
                (t[3] = s * u - a * l),
                (t[4] = n * l - i * u),
                (t[5] = i * a - n * s),
                (t[6] = a * c - o * u),
                (t[7] = r * u - n * c),
                (t[8] = n * o - r * a),
                t
              );
            }),
            (e.determinant = function(t) {
              var e = t[0],
                n = t[1],
                r = t[2],
                i = t[3],
                a = t[4],
                o = t[5],
                s = t[6],
                u = t[7],
                c = t[8];
              return (
                e * (c * a - o * u) + n * (-c * i + o * s) + r * (u * i - a * s)
              );
            }),
            (e.multiply = r),
            (e.translate = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = e[4],
                u = e[5],
                c = e[6],
                l = e[7],
                h = e[8],
                f = n[0],
                d = n[1];
              return (
                (t[0] = r),
                (t[1] = i),
                (t[2] = a),
                (t[3] = o),
                (t[4] = s),
                (t[5] = u),
                (t[6] = f * r + d * o + c),
                (t[7] = f * i + d * s + l),
                (t[8] = f * a + d * u + h),
                t
              );
            }),
            (e.rotate = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = e[4],
                u = e[5],
                c = e[6],
                l = e[7],
                h = e[8],
                f = Math.sin(n),
                d = Math.cos(n);
              return (
                (t[0] = d * r + f * o),
                (t[1] = d * i + f * s),
                (t[2] = d * a + f * u),
                (t[3] = d * o - f * r),
                (t[4] = d * s - f * i),
                (t[5] = d * u - f * a),
                (t[6] = c),
                (t[7] = l),
                (t[8] = h),
                t
              );
            }),
            (e.scale = function(t, e, n) {
              var r = n[0],
                i = n[1];
              return (
                (t[0] = r * e[0]),
                (t[1] = r * e[1]),
                (t[2] = r * e[2]),
                (t[3] = i * e[3]),
                (t[4] = i * e[4]),
                (t[5] = i * e[5]),
                (t[6] = e[6]),
                (t[7] = e[7]),
                (t[8] = e[8]),
                t
              );
            }),
            (e.fromTranslation = function(t, e) {
              return (
                (t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 1),
                (t[5] = 0),
                (t[6] = e[0]),
                (t[7] = e[1]),
                (t[8] = 1),
                t
              );
            }),
            (e.fromRotation = function(t, e) {
              var n = Math.sin(e),
                r = Math.cos(e);
              return (
                (t[0] = r),
                (t[1] = n),
                (t[2] = 0),
                (t[3] = -n),
                (t[4] = r),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 1),
                t
              );
            }),
            (e.fromScaling = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = e[1]),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 1),
                t
              );
            }),
            (e.fromMat2d = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = 0),
                (t[3] = e[2]),
                (t[4] = e[3]),
                (t[5] = 0),
                (t[6] = e[4]),
                (t[7] = e[5]),
                (t[8] = 1),
                t
              );
            }),
            (e.fromQuat = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = n + n,
                s = r + r,
                u = i + i,
                c = n * o,
                l = r * o,
                h = r * s,
                f = i * o,
                d = i * s,
                _ = i * u,
                p = a * o,
                v = a * s,
                E = a * u;
              return (
                (t[0] = 1 - h - _),
                (t[3] = l - E),
                (t[6] = f + v),
                (t[1] = l + E),
                (t[4] = 1 - c - _),
                (t[7] = d - p),
                (t[2] = f - v),
                (t[5] = d + p),
                (t[8] = 1 - c - h),
                t
              );
            }),
            (e.normalFromMat4 = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = e[4],
                s = e[5],
                u = e[6],
                c = e[7],
                l = e[8],
                h = e[9],
                f = e[10],
                d = e[11],
                _ = e[12],
                p = e[13],
                v = e[14],
                E = e[15],
                m = n * s - r * o,
                T = n * u - i * o,
                b = n * c - a * o,
                g = r * u - i * s,
                y = r * c - a * s,
                R = i * c - a * u,
                M = l * p - h * _,
                A = l * v - f * _,
                x = l * E - d * _,
                w = h * v - f * p,
                P = h * E - d * p,
                O = f * E - d * v,
                L = m * O - T * P + b * w + g * x - y * A + R * M;
              return L
                ? ((L = 1 / L),
                  (t[0] = (s * O - u * P + c * w) * L),
                  (t[1] = (u * x - o * O - c * A) * L),
                  (t[2] = (o * P - s * x + c * M) * L),
                  (t[3] = (i * P - r * O - a * w) * L),
                  (t[4] = (n * O - i * x + a * A) * L),
                  (t[5] = (r * x - n * P - a * M) * L),
                  (t[6] = (p * R - v * y + E * g) * L),
                  (t[7] = (v * b - _ * R - E * T) * L),
                  (t[8] = (_ * y - p * b + E * m) * L),
                  t)
                : null;
            }),
            (e.projection = function(t, e, n) {
              return (
                (t[0] = 2 / e),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = -2 / n),
                (t[5] = 0),
                (t[6] = -1),
                (t[7] = 1),
                (t[8] = 1),
                t
              );
            }),
            (e.str = function(t) {
              return (
                "mat3(" +
                t[0] +
                ", " +
                t[1] +
                ", " +
                t[2] +
                ", " +
                t[3] +
                ", " +
                t[4] +
                ", " +
                t[5] +
                ", " +
                t[6] +
                ", " +
                t[7] +
                ", " +
                t[8] +
                ")"
              );
            }),
            (e.frob = function(t) {
              return Math.sqrt(
                Math.pow(t[0], 2) +
                  Math.pow(t[1], 2) +
                  Math.pow(t[2], 2) +
                  Math.pow(t[3], 2) +
                  Math.pow(t[4], 2) +
                  Math.pow(t[5], 2) +
                  Math.pow(t[6], 2) +
                  Math.pow(t[7], 2) +
                  Math.pow(t[8], 2)
              );
            }),
            (e.add = function(t, e, n) {
              return (
                (t[0] = e[0] + n[0]),
                (t[1] = e[1] + n[1]),
                (t[2] = e[2] + n[2]),
                (t[3] = e[3] + n[3]),
                (t[4] = e[4] + n[4]),
                (t[5] = e[5] + n[5]),
                (t[6] = e[6] + n[6]),
                (t[7] = e[7] + n[7]),
                (t[8] = e[8] + n[8]),
                t
              );
            }),
            (e.subtract = i),
            (e.multiplyScalar = function(t, e, n) {
              return (
                (t[0] = e[0] * n),
                (t[1] = e[1] * n),
                (t[2] = e[2] * n),
                (t[3] = e[3] * n),
                (t[4] = e[4] * n),
                (t[5] = e[5] * n),
                (t[6] = e[6] * n),
                (t[7] = e[7] * n),
                (t[8] = e[8] * n),
                t
              );
            }),
            (e.multiplyScalarAndAdd = function(t, e, n, r) {
              return (
                (t[0] = e[0] + n[0] * r),
                (t[1] = e[1] + n[1] * r),
                (t[2] = e[2] + n[2] * r),
                (t[3] = e[3] + n[3] * r),
                (t[4] = e[4] + n[4] * r),
                (t[5] = e[5] + n[5] * r),
                (t[6] = e[6] + n[6] * r),
                (t[7] = e[7] + n[7] * r),
                (t[8] = e[8] + n[8] * r),
                t
              );
            }),
            (e.exactEquals = function(t, e) {
              return (
                t[0] === e[0] &&
                t[1] === e[1] &&
                t[2] === e[2] &&
                t[3] === e[3] &&
                t[4] === e[4] &&
                t[5] === e[5] &&
                t[6] === e[6] &&
                t[7] === e[7] &&
                t[8] === e[8]
              );
            }),
            (e.equals = function(t, e) {
              var n = t[0],
                r = t[1],
                i = t[2],
                o = t[3],
                s = t[4],
                u = t[5],
                c = t[6],
                l = t[7],
                h = t[8],
                f = e[0],
                d = e[1],
                _ = e[2],
                p = e[3],
                v = e[4],
                E = e[5],
                m = e[6],
                T = e[7],
                b = e[8];
              return (
                Math.abs(n - f) <=
                  a.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) &&
                Math.abs(r - d) <=
                  a.EPSILON * Math.max(1, Math.abs(r), Math.abs(d)) &&
                Math.abs(i - _) <=
                  a.EPSILON * Math.max(1, Math.abs(i), Math.abs(_)) &&
                Math.abs(o - p) <=
                  a.EPSILON * Math.max(1, Math.abs(o), Math.abs(p)) &&
                Math.abs(s - v) <=
                  a.EPSILON * Math.max(1, Math.abs(s), Math.abs(v)) &&
                Math.abs(u - E) <=
                  a.EPSILON * Math.max(1, Math.abs(u), Math.abs(E)) &&
                Math.abs(c - m) <=
                  a.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) &&
                Math.abs(l - T) <=
                  a.EPSILON * Math.max(1, Math.abs(l), Math.abs(T)) &&
                Math.abs(h - b) <=
                  a.EPSILON * Math.max(1, Math.abs(h), Math.abs(b))
              );
            });
          var a = (function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          })(n(3));
          (e.mul = r), (e.sub = i);
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return (
              (t[0] = 1),
              (t[1] = 0),
              (t[2] = 0),
              (t[3] = 0),
              (t[4] = 0),
              (t[5] = 1),
              (t[6] = 0),
              (t[7] = 0),
              (t[8] = 0),
              (t[9] = 0),
              (t[10] = 1),
              (t[11] = 0),
              (t[12] = 0),
              (t[13] = 0),
              (t[14] = 0),
              (t[15] = 1),
              t
            );
          }
          function i(t, e, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[3],
              s = e[4],
              u = e[5],
              c = e[6],
              l = e[7],
              h = e[8],
              f = e[9],
              d = e[10],
              _ = e[11],
              p = e[12],
              v = e[13],
              E = e[14],
              m = e[15],
              T = n[0],
              b = n[1],
              g = n[2],
              y = n[3];
            return (
              (t[0] = T * r + b * s + g * h + y * p),
              (t[1] = T * i + b * u + g * f + y * v),
              (t[2] = T * a + b * c + g * d + y * E),
              (t[3] = T * o + b * l + g * _ + y * m),
              (T = n[4]),
              (b = n[5]),
              (g = n[6]),
              (y = n[7]),
              (t[4] = T * r + b * s + g * h + y * p),
              (t[5] = T * i + b * u + g * f + y * v),
              (t[6] = T * a + b * c + g * d + y * E),
              (t[7] = T * o + b * l + g * _ + y * m),
              (T = n[8]),
              (b = n[9]),
              (g = n[10]),
              (y = n[11]),
              (t[8] = T * r + b * s + g * h + y * p),
              (t[9] = T * i + b * u + g * f + y * v),
              (t[10] = T * a + b * c + g * d + y * E),
              (t[11] = T * o + b * l + g * _ + y * m),
              (T = n[12]),
              (b = n[13]),
              (g = n[14]),
              (y = n[15]),
              (t[12] = T * r + b * s + g * h + y * p),
              (t[13] = T * i + b * u + g * f + y * v),
              (t[14] = T * a + b * c + g * d + y * E),
              (t[15] = T * o + b * l + g * _ + y * m),
              t
            );
          }
          function a(t, e, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[3],
              s = r + r,
              u = i + i,
              c = a + a,
              l = r * s,
              h = r * u,
              f = r * c,
              d = i * u,
              _ = i * c,
              p = a * c,
              v = o * s,
              E = o * u,
              m = o * c;
            return (
              (t[0] = 1 - (d + p)),
              (t[1] = h + m),
              (t[2] = f - E),
              (t[3] = 0),
              (t[4] = h - m),
              (t[5] = 1 - (l + p)),
              (t[6] = _ + v),
              (t[7] = 0),
              (t[8] = f + E),
              (t[9] = _ - v),
              (t[10] = 1 - (l + d)),
              (t[11] = 0),
              (t[12] = n[0]),
              (t[13] = n[1]),
              (t[14] = n[2]),
              (t[15] = 1),
              t
            );
          }
          function o(t, e, n) {
            return (
              (t[0] = e[0] - n[0]),
              (t[1] = e[1] - n[1]),
              (t[2] = e[2] - n[2]),
              (t[3] = e[3] - n[3]),
              (t[4] = e[4] - n[4]),
              (t[5] = e[5] - n[5]),
              (t[6] = e[6] - n[6]),
              (t[7] = e[7] - n[7]),
              (t[8] = e[8] - n[8]),
              (t[9] = e[9] - n[9]),
              (t[10] = e[10] - n[10]),
              (t[11] = e[11] - n[11]),
              (t[12] = e[12] - n[12]),
              (t[13] = e[13] - n[13]),
              (t[14] = e[14] - n[14]),
              (t[15] = e[15] - n[15]),
              t
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.sub = e.mul = void 0),
            (e.create = function() {
              var t = new s.ARRAY_TYPE(16);
              return (
                s.ARRAY_TYPE != Float32Array &&
                  ((t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 0),
                  (t[9] = 0),
                  (t[11] = 0),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[14] = 0)),
                (t[0] = 1),
                (t[5] = 1),
                (t[10] = 1),
                (t[15] = 1),
                t
              );
            }),
            (e.clone = function(t) {
              var e = new s.ARRAY_TYPE(16);
              return (
                (e[0] = t[0]),
                (e[1] = t[1]),
                (e[2] = t[2]),
                (e[3] = t[3]),
                (e[4] = t[4]),
                (e[5] = t[5]),
                (e[6] = t[6]),
                (e[7] = t[7]),
                (e[8] = t[8]),
                (e[9] = t[9]),
                (e[10] = t[10]),
                (e[11] = t[11]),
                (e[12] = t[12]),
                (e[13] = t[13]),
                (e[14] = t[14]),
                (e[15] = t[15]),
                e
              );
            }),
            (e.copy = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[3]),
                (t[4] = e[4]),
                (t[5] = e[5]),
                (t[6] = e[6]),
                (t[7] = e[7]),
                (t[8] = e[8]),
                (t[9] = e[9]),
                (t[10] = e[10]),
                (t[11] = e[11]),
                (t[12] = e[12]),
                (t[13] = e[13]),
                (t[14] = e[14]),
                (t[15] = e[15]),
                t
              );
            }),
            (e.fromValues = function(
              t,
              e,
              n,
              r,
              i,
              a,
              o,
              u,
              c,
              l,
              h,
              f,
              d,
              _,
              p,
              v
            ) {
              var E = new s.ARRAY_TYPE(16);
              return (
                (E[0] = t),
                (E[1] = e),
                (E[2] = n),
                (E[3] = r),
                (E[4] = i),
                (E[5] = a),
                (E[6] = o),
                (E[7] = u),
                (E[8] = c),
                (E[9] = l),
                (E[10] = h),
                (E[11] = f),
                (E[12] = d),
                (E[13] = _),
                (E[14] = p),
                (E[15] = v),
                E
              );
            }),
            (e.set = function(
              t,
              e,
              n,
              r,
              i,
              a,
              o,
              s,
              u,
              c,
              l,
              h,
              f,
              d,
              _,
              p,
              v
            ) {
              return (
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = i),
                (t[4] = a),
                (t[5] = o),
                (t[6] = s),
                (t[7] = u),
                (t[8] = c),
                (t[9] = l),
                (t[10] = h),
                (t[11] = f),
                (t[12] = d),
                (t[13] = _),
                (t[14] = p),
                (t[15] = v),
                t
              );
            }),
            (e.identity = r),
            (e.transpose = function(t, e) {
              if (t === e) {
                var n = e[1],
                  r = e[2],
                  i = e[3],
                  a = e[6],
                  o = e[7],
                  s = e[11];
                (t[1] = e[4]),
                  (t[2] = e[8]),
                  (t[3] = e[12]),
                  (t[4] = n),
                  (t[6] = e[9]),
                  (t[7] = e[13]),
                  (t[8] = r),
                  (t[9] = a),
                  (t[11] = e[14]),
                  (t[12] = i),
                  (t[13] = o),
                  (t[14] = s);
              } else
                (t[0] = e[0]),
                  (t[1] = e[4]),
                  (t[2] = e[8]),
                  (t[3] = e[12]),
                  (t[4] = e[1]),
                  (t[5] = e[5]),
                  (t[6] = e[9]),
                  (t[7] = e[13]),
                  (t[8] = e[2]),
                  (t[9] = e[6]),
                  (t[10] = e[10]),
                  (t[11] = e[14]),
                  (t[12] = e[3]),
                  (t[13] = e[7]),
                  (t[14] = e[11]),
                  (t[15] = e[15]);
              return t;
            }),
            (e.invert = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = e[4],
                s = e[5],
                u = e[6],
                c = e[7],
                l = e[8],
                h = e[9],
                f = e[10],
                d = e[11],
                _ = e[12],
                p = e[13],
                v = e[14],
                E = e[15],
                m = n * s - r * o,
                T = n * u - i * o,
                b = n * c - a * o,
                g = r * u - i * s,
                y = r * c - a * s,
                R = i * c - a * u,
                M = l * p - h * _,
                A = l * v - f * _,
                x = l * E - d * _,
                w = h * v - f * p,
                P = h * E - d * p,
                O = f * E - d * v,
                L = m * O - T * P + b * w + g * x - y * A + R * M;
              return L
                ? ((L = 1 / L),
                  (t[0] = (s * O - u * P + c * w) * L),
                  (t[1] = (i * P - r * O - a * w) * L),
                  (t[2] = (p * R - v * y + E * g) * L),
                  (t[3] = (f * y - h * R - d * g) * L),
                  (t[4] = (u * x - o * O - c * A) * L),
                  (t[5] = (n * O - i * x + a * A) * L),
                  (t[6] = (v * b - _ * R - E * T) * L),
                  (t[7] = (l * R - f * b + d * T) * L),
                  (t[8] = (o * P - s * x + c * M) * L),
                  (t[9] = (r * x - n * P - a * M) * L),
                  (t[10] = (_ * y - p * b + E * m) * L),
                  (t[11] = (h * b - l * y - d * m) * L),
                  (t[12] = (s * A - o * w - u * M) * L),
                  (t[13] = (n * w - r * A + i * M) * L),
                  (t[14] = (p * T - _ * g - v * m) * L),
                  (t[15] = (l * g - h * T + f * m) * L),
                  t)
                : null;
            }),
            (e.adjoint = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = e[4],
                s = e[5],
                u = e[6],
                c = e[7],
                l = e[8],
                h = e[9],
                f = e[10],
                d = e[11],
                _ = e[12],
                p = e[13],
                v = e[14],
                E = e[15];
              return (
                (t[0] =
                  s * (f * E - d * v) -
                  h * (u * E - c * v) +
                  p * (u * d - c * f)),
                (t[1] = -(
                  r * (f * E - d * v) -
                  h * (i * E - a * v) +
                  p * (i * d - a * f)
                )),
                (t[2] =
                  r * (u * E - c * v) -
                  s * (i * E - a * v) +
                  p * (i * c - a * u)),
                (t[3] = -(
                  r * (u * d - c * f) -
                  s * (i * d - a * f) +
                  h * (i * c - a * u)
                )),
                (t[4] = -(
                  o * (f * E - d * v) -
                  l * (u * E - c * v) +
                  _ * (u * d - c * f)
                )),
                (t[5] =
                  n * (f * E - d * v) -
                  l * (i * E - a * v) +
                  _ * (i * d - a * f)),
                (t[6] = -(
                  n * (u * E - c * v) -
                  o * (i * E - a * v) +
                  _ * (i * c - a * u)
                )),
                (t[7] =
                  n * (u * d - c * f) -
                  o * (i * d - a * f) +
                  l * (i * c - a * u)),
                (t[8] =
                  o * (h * E - d * p) -
                  l * (s * E - c * p) +
                  _ * (s * d - c * h)),
                (t[9] = -(
                  n * (h * E - d * p) -
                  l * (r * E - a * p) +
                  _ * (r * d - a * h)
                )),
                (t[10] =
                  n * (s * E - c * p) -
                  o * (r * E - a * p) +
                  _ * (r * c - a * s)),
                (t[11] = -(
                  n * (s * d - c * h) -
                  o * (r * d - a * h) +
                  l * (r * c - a * s)
                )),
                (t[12] = -(
                  o * (h * v - f * p) -
                  l * (s * v - u * p) +
                  _ * (s * f - u * h)
                )),
                (t[13] =
                  n * (h * v - f * p) -
                  l * (r * v - i * p) +
                  _ * (r * f - i * h)),
                (t[14] = -(
                  n * (s * v - u * p) -
                  o * (r * v - i * p) +
                  _ * (r * u - i * s)
                )),
                (t[15] =
                  n * (s * f - u * h) -
                  o * (r * f - i * h) +
                  l * (r * u - i * s)),
                t
              );
            }),
            (e.determinant = function(t) {
              var e = t[0],
                n = t[1],
                r = t[2],
                i = t[3],
                a = t[4],
                o = t[5],
                s = t[6],
                u = t[7],
                c = t[8],
                l = t[9],
                h = t[10],
                f = t[11],
                d = t[12],
                _ = t[13],
                p = t[14],
                v = t[15];
              return (
                (e * o - n * a) * (h * v - f * p) -
                (e * s - r * a) * (l * v - f * _) +
                (e * u - i * a) * (l * p - h * _) +
                (n * s - r * o) * (c * v - f * d) -
                (n * u - i * o) * (c * p - h * d) +
                (r * u - i * s) * (c * _ - l * d)
              );
            }),
            (e.multiply = i),
            (e.translate = function(t, e, n) {
              var r = n[0],
                i = n[1],
                a = n[2],
                o = void 0,
                s = void 0,
                u = void 0,
                c = void 0,
                l = void 0,
                h = void 0,
                f = void 0,
                d = void 0,
                _ = void 0,
                p = void 0,
                v = void 0,
                E = void 0;
              return (
                e === t
                  ? ((t[12] = e[0] * r + e[4] * i + e[8] * a + e[12]),
                    (t[13] = e[1] * r + e[5] * i + e[9] * a + e[13]),
                    (t[14] = e[2] * r + e[6] * i + e[10] * a + e[14]),
                    (t[15] = e[3] * r + e[7] * i + e[11] * a + e[15]))
                  : ((o = e[0]),
                    (s = e[1]),
                    (u = e[2]),
                    (c = e[3]),
                    (l = e[4]),
                    (h = e[5]),
                    (f = e[6]),
                    (d = e[7]),
                    (_ = e[8]),
                    (p = e[9]),
                    (v = e[10]),
                    (E = e[11]),
                    (t[0] = o),
                    (t[1] = s),
                    (t[2] = u),
                    (t[3] = c),
                    (t[4] = l),
                    (t[5] = h),
                    (t[6] = f),
                    (t[7] = d),
                    (t[8] = _),
                    (t[9] = p),
                    (t[10] = v),
                    (t[11] = E),
                    (t[12] = o * r + l * i + _ * a + e[12]),
                    (t[13] = s * r + h * i + p * a + e[13]),
                    (t[14] = u * r + f * i + v * a + e[14]),
                    (t[15] = c * r + d * i + E * a + e[15])),
                t
              );
            }),
            (e.scale = function(t, e, n) {
              var r = n[0],
                i = n[1],
                a = n[2];
              return (
                (t[0] = e[0] * r),
                (t[1] = e[1] * r),
                (t[2] = e[2] * r),
                (t[3] = e[3] * r),
                (t[4] = e[4] * i),
                (t[5] = e[5] * i),
                (t[6] = e[6] * i),
                (t[7] = e[7] * i),
                (t[8] = e[8] * a),
                (t[9] = e[9] * a),
                (t[10] = e[10] * a),
                (t[11] = e[11] * a),
                (t[12] = e[12]),
                (t[13] = e[13]),
                (t[14] = e[14]),
                (t[15] = e[15]),
                t
              );
            }),
            (e.rotate = function(t, e, n, r) {
              var i = r[0],
                a = r[1],
                o = r[2],
                u = Math.sqrt(i * i + a * a + o * o),
                c = void 0,
                l = void 0,
                h = void 0,
                f = void 0,
                d = void 0,
                _ = void 0,
                p = void 0,
                v = void 0,
                E = void 0,
                m = void 0,
                T = void 0,
                b = void 0,
                g = void 0,
                y = void 0,
                R = void 0,
                M = void 0,
                A = void 0,
                x = void 0,
                w = void 0,
                P = void 0,
                O = void 0,
                L = void 0,
                S = void 0,
                I = void 0;
              return u < s.EPSILON
                ? null
                : ((i *= u = 1 / u),
                  (a *= u),
                  (o *= u),
                  (c = Math.sin(n)),
                  (h = 1 - (l = Math.cos(n))),
                  (f = e[0]),
                  (d = e[1]),
                  (_ = e[2]),
                  (p = e[3]),
                  (v = e[4]),
                  (E = e[5]),
                  (m = e[6]),
                  (T = e[7]),
                  (b = e[8]),
                  (g = e[9]),
                  (y = e[10]),
                  (R = e[11]),
                  (M = i * i * h + l),
                  (A = a * i * h + o * c),
                  (x = o * i * h - a * c),
                  (w = i * a * h - o * c),
                  (P = a * a * h + l),
                  (O = o * a * h + i * c),
                  (L = i * o * h + a * c),
                  (S = a * o * h - i * c),
                  (I = o * o * h + l),
                  (t[0] = f * M + v * A + b * x),
                  (t[1] = d * M + E * A + g * x),
                  (t[2] = _ * M + m * A + y * x),
                  (t[3] = p * M + T * A + R * x),
                  (t[4] = f * w + v * P + b * O),
                  (t[5] = d * w + E * P + g * O),
                  (t[6] = _ * w + m * P + y * O),
                  (t[7] = p * w + T * P + R * O),
                  (t[8] = f * L + v * S + b * I),
                  (t[9] = d * L + E * S + g * I),
                  (t[10] = _ * L + m * S + y * I),
                  (t[11] = p * L + T * S + R * I),
                  e !== t &&
                    ((t[12] = e[12]),
                    (t[13] = e[13]),
                    (t[14] = e[14]),
                    (t[15] = e[15])),
                  t);
            }),
            (e.rotateX = function(t, e, n) {
              var r = Math.sin(n),
                i = Math.cos(n),
                a = e[4],
                o = e[5],
                s = e[6],
                u = e[7],
                c = e[8],
                l = e[9],
                h = e[10],
                f = e[11];
              return (
                e !== t &&
                  ((t[0] = e[0]),
                  (t[1] = e[1]),
                  (t[2] = e[2]),
                  (t[3] = e[3]),
                  (t[12] = e[12]),
                  (t[13] = e[13]),
                  (t[14] = e[14]),
                  (t[15] = e[15])),
                (t[4] = a * i + c * r),
                (t[5] = o * i + l * r),
                (t[6] = s * i + h * r),
                (t[7] = u * i + f * r),
                (t[8] = c * i - a * r),
                (t[9] = l * i - o * r),
                (t[10] = h * i - s * r),
                (t[11] = f * i - u * r),
                t
              );
            }),
            (e.rotateY = function(t, e, n) {
              var r = Math.sin(n),
                i = Math.cos(n),
                a = e[0],
                o = e[1],
                s = e[2],
                u = e[3],
                c = e[8],
                l = e[9],
                h = e[10],
                f = e[11];
              return (
                e !== t &&
                  ((t[4] = e[4]),
                  (t[5] = e[5]),
                  (t[6] = e[6]),
                  (t[7] = e[7]),
                  (t[12] = e[12]),
                  (t[13] = e[13]),
                  (t[14] = e[14]),
                  (t[15] = e[15])),
                (t[0] = a * i - c * r),
                (t[1] = o * i - l * r),
                (t[2] = s * i - h * r),
                (t[3] = u * i - f * r),
                (t[8] = a * r + c * i),
                (t[9] = o * r + l * i),
                (t[10] = s * r + h * i),
                (t[11] = u * r + f * i),
                t
              );
            }),
            (e.rotateZ = function(t, e, n) {
              var r = Math.sin(n),
                i = Math.cos(n),
                a = e[0],
                o = e[1],
                s = e[2],
                u = e[3],
                c = e[4],
                l = e[5],
                h = e[6],
                f = e[7];
              return (
                e !== t &&
                  ((t[8] = e[8]),
                  (t[9] = e[9]),
                  (t[10] = e[10]),
                  (t[11] = e[11]),
                  (t[12] = e[12]),
                  (t[13] = e[13]),
                  (t[14] = e[14]),
                  (t[15] = e[15])),
                (t[0] = a * i + c * r),
                (t[1] = o * i + l * r),
                (t[2] = s * i + h * r),
                (t[3] = u * i + f * r),
                (t[4] = c * i - a * r),
                (t[5] = l * i - o * r),
                (t[6] = h * i - s * r),
                (t[7] = f * i - u * r),
                t
              );
            }),
            (e.fromTranslation = function(t, e) {
              return (
                (t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = 1),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = 1),
                (t[11] = 0),
                (t[12] = e[0]),
                (t[13] = e[1]),
                (t[14] = e[2]),
                (t[15] = 1),
                t
              );
            }),
            (e.fromScaling = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = e[1]),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = e[2]),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1),
                t
              );
            }),
            (e.fromRotation = function(t, e, n) {
              var r = n[0],
                i = n[1],
                a = n[2],
                o = Math.sqrt(r * r + i * i + a * a),
                u = void 0,
                c = void 0,
                l = void 0;
              return o < s.EPSILON
                ? null
                : ((r *= o = 1 / o),
                  (i *= o),
                  (a *= o),
                  (u = Math.sin(e)),
                  (l = 1 - (c = Math.cos(e))),
                  (t[0] = r * r * l + c),
                  (t[1] = i * r * l + a * u),
                  (t[2] = a * r * l - i * u),
                  (t[3] = 0),
                  (t[4] = r * i * l - a * u),
                  (t[5] = i * i * l + c),
                  (t[6] = a * i * l + r * u),
                  (t[7] = 0),
                  (t[8] = r * a * l + i * u),
                  (t[9] = i * a * l - r * u),
                  (t[10] = a * a * l + c),
                  (t[11] = 0),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[14] = 0),
                  (t[15] = 1),
                  t);
            }),
            (e.fromXRotation = function(t, e) {
              var n = Math.sin(e),
                r = Math.cos(e);
              return (
                (t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = r),
                (t[6] = n),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = -n),
                (t[10] = r),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1),
                t
              );
            }),
            (e.fromYRotation = function(t, e) {
              var n = Math.sin(e),
                r = Math.cos(e);
              return (
                (t[0] = r),
                (t[1] = 0),
                (t[2] = -n),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = 1),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = n),
                (t[9] = 0),
                (t[10] = r),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1),
                t
              );
            }),
            (e.fromZRotation = function(t, e) {
              var n = Math.sin(e),
                r = Math.cos(e);
              return (
                (t[0] = r),
                (t[1] = n),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = -n),
                (t[5] = r),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = 1),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1),
                t
              );
            }),
            (e.fromRotationTranslation = a),
            (e.fromQuat2 = function(t, e) {
              var n = new s.ARRAY_TYPE(3),
                r = -e[0],
                i = -e[1],
                o = -e[2],
                u = e[3],
                c = e[4],
                l = e[5],
                h = e[6],
                f = e[7],
                d = r * r + i * i + o * o + u * u;
              return (
                d > 0
                  ? ((n[0] = (2 * (c * u + f * r + l * o - h * i)) / d),
                    (n[1] = (2 * (l * u + f * i + h * r - c * o)) / d),
                    (n[2] = (2 * (h * u + f * o + c * i - l * r)) / d))
                  : ((n[0] = 2 * (c * u + f * r + l * o - h * i)),
                    (n[1] = 2 * (l * u + f * i + h * r - c * o)),
                    (n[2] = 2 * (h * u + f * o + c * i - l * r))),
                a(t, e, n),
                t
              );
            }),
            (e.getTranslation = function(t, e) {
              return (t[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), t;
            }),
            (e.getScaling = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[4],
                o = e[5],
                s = e[6],
                u = e[8],
                c = e[9],
                l = e[10];
              return (
                (t[0] = Math.sqrt(n * n + r * r + i * i)),
                (t[1] = Math.sqrt(a * a + o * o + s * s)),
                (t[2] = Math.sqrt(u * u + c * c + l * l)),
                t
              );
            }),
            (e.getRotation = function(t, e) {
              var n = e[0] + e[5] + e[10],
                r = 0;
              return (
                n > 0
                  ? ((r = 2 * Math.sqrt(n + 1)),
                    (t[3] = 0.25 * r),
                    (t[0] = (e[6] - e[9]) / r),
                    (t[1] = (e[8] - e[2]) / r),
                    (t[2] = (e[1] - e[4]) / r))
                  : e[0] > e[5] && e[0] > e[10]
                  ? ((r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10])),
                    (t[3] = (e[6] - e[9]) / r),
                    (t[0] = 0.25 * r),
                    (t[1] = (e[1] + e[4]) / r),
                    (t[2] = (e[8] + e[2]) / r))
                  : e[5] > e[10]
                  ? ((r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10])),
                    (t[3] = (e[8] - e[2]) / r),
                    (t[0] = (e[1] + e[4]) / r),
                    (t[1] = 0.25 * r),
                    (t[2] = (e[6] + e[9]) / r))
                  : ((r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5])),
                    (t[3] = (e[1] - e[4]) / r),
                    (t[0] = (e[8] + e[2]) / r),
                    (t[1] = (e[6] + e[9]) / r),
                    (t[2] = 0.25 * r)),
                t
              );
            }),
            (e.fromRotationTranslationScale = function(t, e, n, r) {
              var i = e[0],
                a = e[1],
                o = e[2],
                s = e[3],
                u = i + i,
                c = a + a,
                l = o + o,
                h = i * u,
                f = i * c,
                d = i * l,
                _ = a * c,
                p = a * l,
                v = o * l,
                E = s * u,
                m = s * c,
                T = s * l,
                b = r[0],
                g = r[1],
                y = r[2];
              return (
                (t[0] = (1 - (_ + v)) * b),
                (t[1] = (f + T) * b),
                (t[2] = (d - m) * b),
                (t[3] = 0),
                (t[4] = (f - T) * g),
                (t[5] = (1 - (h + v)) * g),
                (t[6] = (p + E) * g),
                (t[7] = 0),
                (t[8] = (d + m) * y),
                (t[9] = (p - E) * y),
                (t[10] = (1 - (h + _)) * y),
                (t[11] = 0),
                (t[12] = n[0]),
                (t[13] = n[1]),
                (t[14] = n[2]),
                (t[15] = 1),
                t
              );
            }),
            (e.fromRotationTranslationScaleOrigin = function(t, e, n, r, i) {
              var a = e[0],
                o = e[1],
                s = e[2],
                u = e[3],
                c = a + a,
                l = o + o,
                h = s + s,
                f = a * c,
                d = a * l,
                _ = a * h,
                p = o * l,
                v = o * h,
                E = s * h,
                m = u * c,
                T = u * l,
                b = u * h,
                g = r[0],
                y = r[1],
                R = r[2],
                M = i[0],
                A = i[1],
                x = i[2],
                w = (1 - (p + E)) * g,
                P = (d + b) * g,
                O = (_ - T) * g,
                L = (d - b) * y,
                S = (1 - (f + E)) * y,
                I = (v + m) * y,
                N = (_ + T) * R,
                C = (v - m) * R,
                F = (1 - (f + p)) * R;
              return (
                (t[0] = w),
                (t[1] = P),
                (t[2] = O),
                (t[3] = 0),
                (t[4] = L),
                (t[5] = S),
                (t[6] = I),
                (t[7] = 0),
                (t[8] = N),
                (t[9] = C),
                (t[10] = F),
                (t[11] = 0),
                (t[12] = n[0] + M - (w * M + L * A + N * x)),
                (t[13] = n[1] + A - (P * M + S * A + C * x)),
                (t[14] = n[2] + x - (O * M + I * A + F * x)),
                (t[15] = 1),
                t
              );
            }),
            (e.fromQuat = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = n + n,
                s = r + r,
                u = i + i,
                c = n * o,
                l = r * o,
                h = r * s,
                f = i * o,
                d = i * s,
                _ = i * u,
                p = a * o,
                v = a * s,
                E = a * u;
              return (
                (t[0] = 1 - h - _),
                (t[1] = l + E),
                (t[2] = f - v),
                (t[3] = 0),
                (t[4] = l - E),
                (t[5] = 1 - c - _),
                (t[6] = d + p),
                (t[7] = 0),
                (t[8] = f + v),
                (t[9] = d - p),
                (t[10] = 1 - c - h),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1),
                t
              );
            }),
            (e.frustum = function(t, e, n, r, i, a, o) {
              var s = 1 / (n - e),
                u = 1 / (i - r),
                c = 1 / (a - o);
              return (
                (t[0] = 2 * a * s),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = 2 * a * u),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = (n + e) * s),
                (t[9] = (i + r) * u),
                (t[10] = (o + a) * c),
                (t[11] = -1),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = o * a * 2 * c),
                (t[15] = 0),
                t
              );
            }),
            (e.perspective = function(t, e, n, r, i) {
              var a = 1 / Math.tan(e / 2),
                o = void 0;
              return (
                (t[0] = a / n),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = a),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[11] = -1),
                (t[12] = 0),
                (t[13] = 0),
                (t[15] = 0),
                null != i && i !== 1 / 0
                  ? ((o = 1 / (r - i)),
                    (t[10] = (i + r) * o),
                    (t[14] = 2 * i * r * o))
                  : ((t[10] = -1), (t[14] = -2 * r)),
                t
              );
            }),
            (e.perspectiveFromFieldOfView = function(t, e, n, r) {
              var i = Math.tan((e.upDegrees * Math.PI) / 180),
                a = Math.tan((e.downDegrees * Math.PI) / 180),
                o = Math.tan((e.leftDegrees * Math.PI) / 180),
                s = Math.tan((e.rightDegrees * Math.PI) / 180),
                u = 2 / (o + s),
                c = 2 / (i + a);
              return (
                (t[0] = u),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = c),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = -(o - s) * u * 0.5),
                (t[9] = (i - a) * c * 0.5),
                (t[10] = r / (n - r)),
                (t[11] = -1),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = (r * n) / (n - r)),
                (t[15] = 0),
                t
              );
            }),
            (e.ortho = function(t, e, n, r, i, a, o) {
              var s = 1 / (e - n),
                u = 1 / (r - i),
                c = 1 / (a - o);
              return (
                (t[0] = -2 * s),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = -2 * u),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = 2 * c),
                (t[11] = 0),
                (t[12] = (e + n) * s),
                (t[13] = (i + r) * u),
                (t[14] = (o + a) * c),
                (t[15] = 1),
                t
              );
            }),
            (e.lookAt = function(t, e, n, i) {
              var a = void 0,
                o = void 0,
                u = void 0,
                c = void 0,
                l = void 0,
                h = void 0,
                f = void 0,
                d = void 0,
                _ = void 0,
                p = void 0,
                v = e[0],
                E = e[1],
                m = e[2],
                T = i[0],
                b = i[1],
                g = i[2],
                y = n[0],
                R = n[1],
                M = n[2];
              return Math.abs(v - y) < s.EPSILON &&
                Math.abs(E - R) < s.EPSILON &&
                Math.abs(m - M) < s.EPSILON
                ? r(t)
                : ((f = v - y),
                  (d = E - R),
                  (_ = m - M),
                  (a =
                    b * (_ *= p = 1 / Math.sqrt(f * f + d * d + _ * _)) -
                    g * (d *= p)),
                  (o = g * (f *= p) - T * _),
                  (u = T * d - b * f),
                  (p = Math.sqrt(a * a + o * o + u * u))
                    ? ((a *= p = 1 / p), (o *= p), (u *= p))
                    : ((a = 0), (o = 0), (u = 0)),
                  (c = d * u - _ * o),
                  (l = _ * a - f * u),
                  (h = f * o - d * a),
                  (p = Math.sqrt(c * c + l * l + h * h))
                    ? ((c *= p = 1 / p), (l *= p), (h *= p))
                    : ((c = 0), (l = 0), (h = 0)),
                  (t[0] = a),
                  (t[1] = c),
                  (t[2] = f),
                  (t[3] = 0),
                  (t[4] = o),
                  (t[5] = l),
                  (t[6] = d),
                  (t[7] = 0),
                  (t[8] = u),
                  (t[9] = h),
                  (t[10] = _),
                  (t[11] = 0),
                  (t[12] = -(a * v + o * E + u * m)),
                  (t[13] = -(c * v + l * E + h * m)),
                  (t[14] = -(f * v + d * E + _ * m)),
                  (t[15] = 1),
                  t);
            }),
            (e.targetTo = function(t, e, n, r) {
              var i = e[0],
                a = e[1],
                o = e[2],
                s = r[0],
                u = r[1],
                c = r[2],
                l = i - n[0],
                h = a - n[1],
                f = o - n[2],
                d = l * l + h * h + f * f;
              d > 0 && ((l *= d = 1 / Math.sqrt(d)), (h *= d), (f *= d));
              var _ = u * f - c * h,
                p = c * l - s * f,
                v = s * h - u * l;
              return (
                (d = _ * _ + p * p + v * v) > 0 &&
                  ((_ *= d = 1 / Math.sqrt(d)), (p *= d), (v *= d)),
                (t[0] = _),
                (t[1] = p),
                (t[2] = v),
                (t[3] = 0),
                (t[4] = h * v - f * p),
                (t[5] = f * _ - l * v),
                (t[6] = l * p - h * _),
                (t[7] = 0),
                (t[8] = l),
                (t[9] = h),
                (t[10] = f),
                (t[11] = 0),
                (t[12] = i),
                (t[13] = a),
                (t[14] = o),
                (t[15] = 1),
                t
              );
            }),
            (e.str = function(t) {
              return (
                "mat4(" +
                t[0] +
                ", " +
                t[1] +
                ", " +
                t[2] +
                ", " +
                t[3] +
                ", " +
                t[4] +
                ", " +
                t[5] +
                ", " +
                t[6] +
                ", " +
                t[7] +
                ", " +
                t[8] +
                ", " +
                t[9] +
                ", " +
                t[10] +
                ", " +
                t[11] +
                ", " +
                t[12] +
                ", " +
                t[13] +
                ", " +
                t[14] +
                ", " +
                t[15] +
                ")"
              );
            }),
            (e.frob = function(t) {
              return Math.sqrt(
                Math.pow(t[0], 2) +
                  Math.pow(t[1], 2) +
                  Math.pow(t[2], 2) +
                  Math.pow(t[3], 2) +
                  Math.pow(t[4], 2) +
                  Math.pow(t[5], 2) +
                  Math.pow(t[6], 2) +
                  Math.pow(t[7], 2) +
                  Math.pow(t[8], 2) +
                  Math.pow(t[9], 2) +
                  Math.pow(t[10], 2) +
                  Math.pow(t[11], 2) +
                  Math.pow(t[12], 2) +
                  Math.pow(t[13], 2) +
                  Math.pow(t[14], 2) +
                  Math.pow(t[15], 2)
              );
            }),
            (e.add = function(t, e, n) {
              return (
                (t[0] = e[0] + n[0]),
                (t[1] = e[1] + n[1]),
                (t[2] = e[2] + n[2]),
                (t[3] = e[3] + n[3]),
                (t[4] = e[4] + n[4]),
                (t[5] = e[5] + n[5]),
                (t[6] = e[6] + n[6]),
                (t[7] = e[7] + n[7]),
                (t[8] = e[8] + n[8]),
                (t[9] = e[9] + n[9]),
                (t[10] = e[10] + n[10]),
                (t[11] = e[11] + n[11]),
                (t[12] = e[12] + n[12]),
                (t[13] = e[13] + n[13]),
                (t[14] = e[14] + n[14]),
                (t[15] = e[15] + n[15]),
                t
              );
            }),
            (e.subtract = o),
            (e.multiplyScalar = function(t, e, n) {
              return (
                (t[0] = e[0] * n),
                (t[1] = e[1] * n),
                (t[2] = e[2] * n),
                (t[3] = e[3] * n),
                (t[4] = e[4] * n),
                (t[5] = e[5] * n),
                (t[6] = e[6] * n),
                (t[7] = e[7] * n),
                (t[8] = e[8] * n),
                (t[9] = e[9] * n),
                (t[10] = e[10] * n),
                (t[11] = e[11] * n),
                (t[12] = e[12] * n),
                (t[13] = e[13] * n),
                (t[14] = e[14] * n),
                (t[15] = e[15] * n),
                t
              );
            }),
            (e.multiplyScalarAndAdd = function(t, e, n, r) {
              return (
                (t[0] = e[0] + n[0] * r),
                (t[1] = e[1] + n[1] * r),
                (t[2] = e[2] + n[2] * r),
                (t[3] = e[3] + n[3] * r),
                (t[4] = e[4] + n[4] * r),
                (t[5] = e[5] + n[5] * r),
                (t[6] = e[6] + n[6] * r),
                (t[7] = e[7] + n[7] * r),
                (t[8] = e[8] + n[8] * r),
                (t[9] = e[9] + n[9] * r),
                (t[10] = e[10] + n[10] * r),
                (t[11] = e[11] + n[11] * r),
                (t[12] = e[12] + n[12] * r),
                (t[13] = e[13] + n[13] * r),
                (t[14] = e[14] + n[14] * r),
                (t[15] = e[15] + n[15] * r),
                t
              );
            }),
            (e.exactEquals = function(t, e) {
              return (
                t[0] === e[0] &&
                t[1] === e[1] &&
                t[2] === e[2] &&
                t[3] === e[3] &&
                t[4] === e[4] &&
                t[5] === e[5] &&
                t[6] === e[6] &&
                t[7] === e[7] &&
                t[8] === e[8] &&
                t[9] === e[9] &&
                t[10] === e[10] &&
                t[11] === e[11] &&
                t[12] === e[12] &&
                t[13] === e[13] &&
                t[14] === e[14] &&
                t[15] === e[15]
              );
            }),
            (e.equals = function(t, e) {
              var n = t[0],
                r = t[1],
                i = t[2],
                a = t[3],
                o = t[4],
                u = t[5],
                c = t[6],
                l = t[7],
                h = t[8],
                f = t[9],
                d = t[10],
                _ = t[11],
                p = t[12],
                v = t[13],
                E = t[14],
                m = t[15],
                T = e[0],
                b = e[1],
                g = e[2],
                y = e[3],
                R = e[4],
                M = e[5],
                A = e[6],
                x = e[7],
                w = e[8],
                P = e[9],
                O = e[10],
                L = e[11],
                S = e[12],
                I = e[13],
                N = e[14],
                C = e[15];
              return (
                Math.abs(n - T) <=
                  s.EPSILON * Math.max(1, Math.abs(n), Math.abs(T)) &&
                Math.abs(r - b) <=
                  s.EPSILON * Math.max(1, Math.abs(r), Math.abs(b)) &&
                Math.abs(i - g) <=
                  s.EPSILON * Math.max(1, Math.abs(i), Math.abs(g)) &&
                Math.abs(a - y) <=
                  s.EPSILON * Math.max(1, Math.abs(a), Math.abs(y)) &&
                Math.abs(o - R) <=
                  s.EPSILON * Math.max(1, Math.abs(o), Math.abs(R)) &&
                Math.abs(u - M) <=
                  s.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) &&
                Math.abs(c - A) <=
                  s.EPSILON * Math.max(1, Math.abs(c), Math.abs(A)) &&
                Math.abs(l - x) <=
                  s.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) &&
                Math.abs(h - w) <=
                  s.EPSILON * Math.max(1, Math.abs(h), Math.abs(w)) &&
                Math.abs(f - P) <=
                  s.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) &&
                Math.abs(d - O) <=
                  s.EPSILON * Math.max(1, Math.abs(d), Math.abs(O)) &&
                Math.abs(_ - L) <=
                  s.EPSILON * Math.max(1, Math.abs(_), Math.abs(L)) &&
                Math.abs(p - S) <=
                  s.EPSILON * Math.max(1, Math.abs(p), Math.abs(S)) &&
                Math.abs(v - I) <=
                  s.EPSILON * Math.max(1, Math.abs(v), Math.abs(I)) &&
                Math.abs(E - N) <=
                  s.EPSILON * Math.max(1, Math.abs(E), Math.abs(N)) &&
                Math.abs(m - C) <=
                  s.EPSILON * Math.max(1, Math.abs(m), Math.abs(C))
              );
            });
          var s = (function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          })(n(3));
          (e.mul = i), (e.sub = o);
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          }
          function i() {
            var t = new p.ARRAY_TYPE(4);
            return (
              p.ARRAY_TYPE != Float32Array &&
                ((t[0] = 0), (t[1] = 0), (t[2] = 0)),
              (t[3] = 1),
              t
            );
          }
          function a(t, e, n) {
            n *= 0.5;
            var r = Math.sin(n);
            return (
              (t[0] = r * e[0]),
              (t[1] = r * e[1]),
              (t[2] = r * e[2]),
              (t[3] = Math.cos(n)),
              t
            );
          }
          function o(t, e, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[3],
              s = n[0],
              u = n[1],
              c = n[2],
              l = n[3];
            return (
              (t[0] = r * l + o * s + i * c - a * u),
              (t[1] = i * l + o * u + a * s - r * c),
              (t[2] = a * l + o * c + r * u - i * s),
              (t[3] = o * l - r * s - i * u - a * c),
              t
            );
          }
          function s(t, e, n, r) {
            var i = e[0],
              a = e[1],
              o = e[2],
              s = e[3],
              u = n[0],
              c = n[1],
              l = n[2],
              h = n[3],
              f = void 0,
              d = void 0,
              _ = void 0,
              v = void 0,
              E = void 0;
            return (
              (d = i * u + a * c + o * l + s * h) < 0 &&
                ((d = -d), (u = -u), (c = -c), (l = -l), (h = -h)),
              1 - d > p.EPSILON
                ? ((f = Math.acos(d)),
                  (_ = Math.sin(f)),
                  (v = Math.sin((1 - r) * f) / _),
                  (E = Math.sin(r * f) / _))
                : ((v = 1 - r), (E = r)),
              (t[0] = v * i + E * u),
              (t[1] = v * a + E * c),
              (t[2] = v * o + E * l),
              (t[3] = v * s + E * h),
              t
            );
          }
          function u(t, e) {
            var n = e[0] + e[4] + e[8],
              r = void 0;
            if (n > 0)
              (r = Math.sqrt(n + 1)),
                (t[3] = 0.5 * r),
                (r = 0.5 / r),
                (t[0] = (e[5] - e[7]) * r),
                (t[1] = (e[6] - e[2]) * r),
                (t[2] = (e[1] - e[3]) * r);
            else {
              var i = 0;
              e[4] > e[0] && (i = 1), e[8] > e[3 * i + i] && (i = 2);
              var a = (i + 1) % 3,
                o = (i + 2) % 3;
              (r = Math.sqrt(e[3 * i + i] - e[3 * a + a] - e[3 * o + o] + 1)),
                (t[i] = 0.5 * r),
                (r = 0.5 / r),
                (t[3] = (e[3 * a + o] - e[3 * o + a]) * r),
                (t[a] = (e[3 * a + i] + e[3 * i + a]) * r),
                (t[o] = (e[3 * o + i] + e[3 * i + o]) * r);
            }
            return t;
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setAxes = e.sqlerp = e.rotationTo = e.equals = e.exactEquals = e.normalize = e.sqrLen = e.squaredLength = e.len = e.length = e.lerp = e.dot = e.scale = e.mul = e.add = e.set = e.copy = e.fromValues = e.clone = void 0),
            (e.create = i),
            (e.identity = function(t) {
              return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
            }),
            (e.setAxisAngle = a),
            (e.getAxisAngle = function(t, e) {
              var n = 2 * Math.acos(e[3]),
                r = Math.sin(n / 2);
              return (
                r > p.EPSILON
                  ? ((t[0] = e[0] / r), (t[1] = e[1] / r), (t[2] = e[2] / r))
                  : ((t[0] = 1), (t[1] = 0), (t[2] = 0)),
                n
              );
            }),
            (e.multiply = o),
            (e.rotateX = function(t, e, n) {
              n *= 0.5;
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = Math.sin(n),
                u = Math.cos(n);
              return (
                (t[0] = r * u + o * s),
                (t[1] = i * u + a * s),
                (t[2] = a * u - i * s),
                (t[3] = o * u - r * s),
                t
              );
            }),
            (e.rotateY = function(t, e, n) {
              n *= 0.5;
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = Math.sin(n),
                u = Math.cos(n);
              return (
                (t[0] = r * u - a * s),
                (t[1] = i * u + o * s),
                (t[2] = a * u + r * s),
                (t[3] = o * u - i * s),
                t
              );
            }),
            (e.rotateZ = function(t, e, n) {
              n *= 0.5;
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = Math.sin(n),
                u = Math.cos(n);
              return (
                (t[0] = r * u + i * s),
                (t[1] = i * u - r * s),
                (t[2] = a * u + o * s),
                (t[3] = o * u - a * s),
                t
              );
            }),
            (e.calculateW = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2];
              return (
                (t[0] = n),
                (t[1] = r),
                (t[2] = i),
                (t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - i * i))),
                t
              );
            }),
            (e.slerp = s),
            (e.random = function(t) {
              var e = p.RANDOM(),
                n = p.RANDOM(),
                r = p.RANDOM(),
                i = Math.sqrt(1 - e),
                a = Math.sqrt(e);
              return (
                (t[0] = i * Math.sin(2 * Math.PI * n)),
                (t[1] = i * Math.cos(2 * Math.PI * n)),
                (t[2] = a * Math.sin(2 * Math.PI * r)),
                (t[3] = a * Math.cos(2 * Math.PI * r)),
                t
              );
            }),
            (e.invert = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = n * n + r * r + i * i + a * a,
                s = o ? 1 / o : 0;
              return (
                (t[0] = -n * s),
                (t[1] = -r * s),
                (t[2] = -i * s),
                (t[3] = a * s),
                t
              );
            }),
            (e.conjugate = function(t, e) {
              return (
                (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = e[3]), t
              );
            }),
            (e.fromMat3 = u),
            (e.fromEuler = function(t, e, n, r) {
              var i = (0.5 * Math.PI) / 180;
              (e *= i), (n *= i), (r *= i);
              var a = Math.sin(e),
                o = Math.cos(e),
                s = Math.sin(n),
                u = Math.cos(n),
                c = Math.sin(r),
                l = Math.cos(r);
              return (
                (t[0] = a * u * l - o * s * c),
                (t[1] = o * s * l + a * u * c),
                (t[2] = o * u * c - a * s * l),
                (t[3] = o * u * l + a * s * c),
                t
              );
            }),
            (e.str = function(t) {
              return (
                "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
              );
            });
          var c,
            l,
            h,
            f,
            d,
            _,
            p = r(n(3)),
            v = r(n(18)),
            E = r(n(21)),
            m = r(n(22)),
            T =
              ((e.clone = m.clone),
              (e.fromValues = m.fromValues),
              (e.copy = m.copy),
              (e.set = m.set),
              (e.add = m.add),
              (e.mul = o),
              (e.scale = m.scale),
              (e.dot = m.dot),
              (e.lerp = m.lerp),
              (e.length = m.length)),
            b = ((e.len = T), (e.squaredLength = m.squaredLength)),
            g = ((e.sqrLen = b), (e.normalize = m.normalize));
          (e.exactEquals = m.exactEquals),
            (e.equals = m.equals),
            (e.rotationTo =
              ((f = E.create()),
              (d = E.fromValues(1, 0, 0)),
              (_ = E.fromValues(0, 1, 0)),
              function(t, e, n) {
                var r = E.dot(e, n);
                return r < -0.999999
                  ? (E.cross(f, d, e),
                    E.len(f) < 1e-6 && E.cross(f, _, e),
                    E.normalize(f, f),
                    a(t, f, Math.PI),
                    t)
                  : r > 0.999999
                  ? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
                  : (E.cross(f, e, n),
                    (t[0] = f[0]),
                    (t[1] = f[1]),
                    (t[2] = f[2]),
                    (t[3] = 1 + r),
                    g(t, t));
              })),
            (e.sqlerp =
              ((l = i()),
              (h = i()),
              function(t, e, n, r, i, a) {
                return (
                  s(l, e, i, a), s(h, n, r, a), s(t, l, h, 2 * a * (1 - a)), t
                );
              })),
            (e.setAxes =
              ((c = v.create()),
              function(t, e, n, r) {
                return (
                  (c[0] = n[0]),
                  (c[3] = n[1]),
                  (c[6] = n[2]),
                  (c[1] = r[0]),
                  (c[4] = r[1]),
                  (c[7] = r[2]),
                  (c[2] = -e[0]),
                  (c[5] = -e[1]),
                  (c[8] = -e[2]),
                  g(t, u(t, c))
                );
              }));
        },
        function(t, e, n) {
          "use strict";
          function r() {
            var t = new p.ARRAY_TYPE(3);
            return (
              p.ARRAY_TYPE != Float32Array &&
                ((t[0] = 0), (t[1] = 0), (t[2] = 0)),
              t
            );
          }
          function i(t) {
            var e = t[0],
              n = t[1],
              r = t[2];
            return Math.sqrt(e * e + n * n + r * r);
          }
          function a(t, e, n) {
            var r = new p.ARRAY_TYPE(3);
            return (r[0] = t), (r[1] = e), (r[2] = n), r;
          }
          function o(t, e, n) {
            return (
              (t[0] = e[0] - n[0]),
              (t[1] = e[1] - n[1]),
              (t[2] = e[2] - n[2]),
              t
            );
          }
          function s(t, e, n) {
            return (
              (t[0] = e[0] * n[0]),
              (t[1] = e[1] * n[1]),
              (t[2] = e[2] * n[2]),
              t
            );
          }
          function u(t, e, n) {
            return (
              (t[0] = e[0] / n[0]),
              (t[1] = e[1] / n[1]),
              (t[2] = e[2] / n[2]),
              t
            );
          }
          function c(t, e) {
            var n = e[0] - t[0],
              r = e[1] - t[1],
              i = e[2] - t[2];
            return Math.sqrt(n * n + r * r + i * i);
          }
          function l(t, e) {
            var n = e[0] - t[0],
              r = e[1] - t[1],
              i = e[2] - t[2];
            return n * n + r * r + i * i;
          }
          function h(t) {
            var e = t[0],
              n = t[1],
              r = t[2];
            return e * e + n * n + r * r;
          }
          function f(t, e) {
            var n = e[0],
              r = e[1],
              i = e[2],
              a = n * n + r * r + i * i;
            return (
              a > 0 &&
                ((a = 1 / Math.sqrt(a)),
                (t[0] = e[0] * a),
                (t[1] = e[1] * a),
                (t[2] = e[2] * a)),
              t
            );
          }
          function d(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0),
            (e.create = r),
            (e.clone = function(t) {
              var e = new p.ARRAY_TYPE(3);
              return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
            }),
            (e.length = i),
            (e.fromValues = a),
            (e.copy = function(t, e) {
              return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
            }),
            (e.set = function(t, e, n, r) {
              return (t[0] = e), (t[1] = n), (t[2] = r), t;
            }),
            (e.add = function(t, e, n) {
              return (
                (t[0] = e[0] + n[0]),
                (t[1] = e[1] + n[1]),
                (t[2] = e[2] + n[2]),
                t
              );
            }),
            (e.subtract = o),
            (e.multiply = s),
            (e.divide = u),
            (e.ceil = function(t, e) {
              return (
                (t[0] = Math.ceil(e[0])),
                (t[1] = Math.ceil(e[1])),
                (t[2] = Math.ceil(e[2])),
                t
              );
            }),
            (e.floor = function(t, e) {
              return (
                (t[0] = Math.floor(e[0])),
                (t[1] = Math.floor(e[1])),
                (t[2] = Math.floor(e[2])),
                t
              );
            }),
            (e.min = function(t, e, n) {
              return (
                (t[0] = Math.min(e[0], n[0])),
                (t[1] = Math.min(e[1], n[1])),
                (t[2] = Math.min(e[2], n[2])),
                t
              );
            }),
            (e.max = function(t, e, n) {
              return (
                (t[0] = Math.max(e[0], n[0])),
                (t[1] = Math.max(e[1], n[1])),
                (t[2] = Math.max(e[2], n[2])),
                t
              );
            }),
            (e.round = function(t, e) {
              return (
                (t[0] = Math.round(e[0])),
                (t[1] = Math.round(e[1])),
                (t[2] = Math.round(e[2])),
                t
              );
            }),
            (e.scale = function(t, e, n) {
              return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
            }),
            (e.scaleAndAdd = function(t, e, n, r) {
              return (
                (t[0] = e[0] + n[0] * r),
                (t[1] = e[1] + n[1] * r),
                (t[2] = e[2] + n[2] * r),
                t
              );
            }),
            (e.distance = c),
            (e.squaredDistance = l),
            (e.squaredLength = h),
            (e.negate = function(t, e) {
              return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
            }),
            (e.inverse = function(t, e) {
              return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
            }),
            (e.normalize = f),
            (e.dot = d),
            (e.cross = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = n[0],
                s = n[1],
                u = n[2];
              return (
                (t[0] = i * u - a * s),
                (t[1] = a * o - r * u),
                (t[2] = r * s - i * o),
                t
              );
            }),
            (e.lerp = function(t, e, n, r) {
              var i = e[0],
                a = e[1],
                o = e[2];
              return (
                (t[0] = i + r * (n[0] - i)),
                (t[1] = a + r * (n[1] - a)),
                (t[2] = o + r * (n[2] - o)),
                t
              );
            }),
            (e.hermite = function(t, e, n, r, i, a) {
              var o = a * a,
                s = o * (2 * a - 3) + 1,
                u = o * (a - 2) + a,
                c = o * (a - 1),
                l = o * (3 - 2 * a);
              return (
                (t[0] = e[0] * s + n[0] * u + r[0] * c + i[0] * l),
                (t[1] = e[1] * s + n[1] * u + r[1] * c + i[1] * l),
                (t[2] = e[2] * s + n[2] * u + r[2] * c + i[2] * l),
                t
              );
            }),
            (e.bezier = function(t, e, n, r, i, a) {
              var o = 1 - a,
                s = o * o,
                u = a * a,
                c = s * o,
                l = 3 * a * s,
                h = 3 * u * o,
                f = u * a;
              return (
                (t[0] = e[0] * c + n[0] * l + r[0] * h + i[0] * f),
                (t[1] = e[1] * c + n[1] * l + r[1] * h + i[1] * f),
                (t[2] = e[2] * c + n[2] * l + r[2] * h + i[2] * f),
                t
              );
            }),
            (e.random = function(t, e) {
              e = e || 1;
              var n = 2 * p.RANDOM() * Math.PI,
                r = 2 * p.RANDOM() - 1,
                i = Math.sqrt(1 - r * r) * e;
              return (
                (t[0] = Math.cos(n) * i),
                (t[1] = Math.sin(n) * i),
                (t[2] = r * e),
                t
              );
            }),
            (e.transformMat4 = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = n[3] * r + n[7] * i + n[11] * a + n[15];
              return (
                (o = o || 1),
                (t[0] = (n[0] * r + n[4] * i + n[8] * a + n[12]) / o),
                (t[1] = (n[1] * r + n[5] * i + n[9] * a + n[13]) / o),
                (t[2] = (n[2] * r + n[6] * i + n[10] * a + n[14]) / o),
                t
              );
            }),
            (e.transformMat3 = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2];
              return (
                (t[0] = r * n[0] + i * n[3] + a * n[6]),
                (t[1] = r * n[1] + i * n[4] + a * n[7]),
                (t[2] = r * n[2] + i * n[5] + a * n[8]),
                t
              );
            }),
            (e.transformQuat = function(t, e, n) {
              var r = n[0],
                i = n[1],
                a = n[2],
                o = n[3],
                s = e[0],
                u = e[1],
                c = e[2],
                l = i * c - a * u,
                h = a * s - r * c,
                f = r * u - i * s,
                d = i * f - a * h,
                _ = a * l - r * f,
                p = r * h - i * l,
                v = 2 * o;
              return (
                (l *= v),
                (h *= v),
                (f *= v),
                (d *= 2),
                (_ *= 2),
                (p *= 2),
                (t[0] = s + l + d),
                (t[1] = u + h + _),
                (t[2] = c + f + p),
                t
              );
            }),
            (e.rotateX = function(t, e, n, r) {
              var i = [],
                a = [];
              return (
                (i[0] = e[0] - n[0]),
                (i[1] = e[1] - n[1]),
                (i[2] = e[2] - n[2]),
                (a[0] = i[0]),
                (a[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r)),
                (a[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r)),
                (t[0] = a[0] + n[0]),
                (t[1] = a[1] + n[1]),
                (t[2] = a[2] + n[2]),
                t
              );
            }),
            (e.rotateY = function(t, e, n, r) {
              var i = [],
                a = [];
              return (
                (i[0] = e[0] - n[0]),
                (i[1] = e[1] - n[1]),
                (i[2] = e[2] - n[2]),
                (a[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r)),
                (a[1] = i[1]),
                (a[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r)),
                (t[0] = a[0] + n[0]),
                (t[1] = a[1] + n[1]),
                (t[2] = a[2] + n[2]),
                t
              );
            }),
            (e.rotateZ = function(t, e, n, r) {
              var i = [],
                a = [];
              return (
                (i[0] = e[0] - n[0]),
                (i[1] = e[1] - n[1]),
                (i[2] = e[2] - n[2]),
                (a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r)),
                (a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r)),
                (a[2] = i[2]),
                (t[0] = a[0] + n[0]),
                (t[1] = a[1] + n[1]),
                (t[2] = a[2] + n[2]),
                t
              );
            }),
            (e.angle = function(t, e) {
              var n = a(t[0], t[1], t[2]),
                r = a(e[0], e[1], e[2]);
              f(n, n), f(r, r);
              var i = d(n, r);
              return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i);
            }),
            (e.str = function(t) {
              return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
            }),
            (e.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
            }),
            (e.equals = function(t, e) {
              var n = t[0],
                r = t[1],
                i = t[2],
                a = e[0],
                o = e[1],
                s = e[2];
              return (
                Math.abs(n - a) <=
                  p.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) &&
                Math.abs(r - o) <=
                  p.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) &&
                Math.abs(i - s) <=
                  p.EPSILON * Math.max(1, Math.abs(i), Math.abs(s))
              );
            });
          var _,
            p = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(3));
          (e.sub = o),
            (e.mul = s),
            (e.div = u),
            (e.dist = c),
            (e.sqrDist = l),
            (e.len = i),
            (e.sqrLen = h),
            (e.forEach =
              ((_ = r()),
              function(t, e, n, r, i, a) {
                var o,
                  s = void 0;
                for (
                  e || (e = 3),
                    n || (n = 0),
                    o = r ? Math.min(r * e + n, t.length) : t.length,
                    s = n;
                  s < o;
                  s += e
                )
                  (_[0] = t[s]),
                    (_[1] = t[s + 1]),
                    (_[2] = t[s + 2]),
                    i(_, _, a),
                    (t[s] = _[0]),
                    (t[s + 1] = _[1]),
                    (t[s + 2] = _[2]);
                return t;
              }));
        },
        function(t, e, n) {
          "use strict";
          function r() {
            var t = new f.ARRAY_TYPE(4);
            return (
              f.ARRAY_TYPE != Float32Array &&
                ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)),
              t
            );
          }
          function i(t, e, n) {
            return (
              (t[0] = e[0] - n[0]),
              (t[1] = e[1] - n[1]),
              (t[2] = e[2] - n[2]),
              (t[3] = e[3] - n[3]),
              t
            );
          }
          function a(t, e, n) {
            return (
              (t[0] = e[0] * n[0]),
              (t[1] = e[1] * n[1]),
              (t[2] = e[2] * n[2]),
              (t[3] = e[3] * n[3]),
              t
            );
          }
          function o(t, e, n) {
            return (
              (t[0] = e[0] / n[0]),
              (t[1] = e[1] / n[1]),
              (t[2] = e[2] / n[2]),
              (t[3] = e[3] / n[3]),
              t
            );
          }
          function s(t, e) {
            var n = e[0] - t[0],
              r = e[1] - t[1],
              i = e[2] - t[2],
              a = e[3] - t[3];
            return Math.sqrt(n * n + r * r + i * i + a * a);
          }
          function u(t, e) {
            var n = e[0] - t[0],
              r = e[1] - t[1],
              i = e[2] - t[2],
              a = e[3] - t[3];
            return n * n + r * r + i * i + a * a;
          }
          function c(t) {
            var e = t[0],
              n = t[1],
              r = t[2],
              i = t[3];
            return Math.sqrt(e * e + n * n + r * r + i * i);
          }
          function l(t) {
            var e = t[0],
              n = t[1],
              r = t[2],
              i = t[3];
            return e * e + n * n + r * r + i * i;
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0),
            (e.create = r),
            (e.clone = function(t) {
              var e = new f.ARRAY_TYPE(4);
              return (
                (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e
              );
            }),
            (e.fromValues = function(t, e, n, r) {
              var i = new f.ARRAY_TYPE(4);
              return (i[0] = t), (i[1] = e), (i[2] = n), (i[3] = r), i;
            }),
            (e.copy = function(t, e) {
              return (
                (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t
              );
            }),
            (e.set = function(t, e, n, r, i) {
              return (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i), t;
            }),
            (e.add = function(t, e, n) {
              return (
                (t[0] = e[0] + n[0]),
                (t[1] = e[1] + n[1]),
                (t[2] = e[2] + n[2]),
                (t[3] = e[3] + n[3]),
                t
              );
            }),
            (e.subtract = i),
            (e.multiply = a),
            (e.divide = o),
            (e.ceil = function(t, e) {
              return (
                (t[0] = Math.ceil(e[0])),
                (t[1] = Math.ceil(e[1])),
                (t[2] = Math.ceil(e[2])),
                (t[3] = Math.ceil(e[3])),
                t
              );
            }),
            (e.floor = function(t, e) {
              return (
                (t[0] = Math.floor(e[0])),
                (t[1] = Math.floor(e[1])),
                (t[2] = Math.floor(e[2])),
                (t[3] = Math.floor(e[3])),
                t
              );
            }),
            (e.min = function(t, e, n) {
              return (
                (t[0] = Math.min(e[0], n[0])),
                (t[1] = Math.min(e[1], n[1])),
                (t[2] = Math.min(e[2], n[2])),
                (t[3] = Math.min(e[3], n[3])),
                t
              );
            }),
            (e.max = function(t, e, n) {
              return (
                (t[0] = Math.max(e[0], n[0])),
                (t[1] = Math.max(e[1], n[1])),
                (t[2] = Math.max(e[2], n[2])),
                (t[3] = Math.max(e[3], n[3])),
                t
              );
            }),
            (e.round = function(t, e) {
              return (
                (t[0] = Math.round(e[0])),
                (t[1] = Math.round(e[1])),
                (t[2] = Math.round(e[2])),
                (t[3] = Math.round(e[3])),
                t
              );
            }),
            (e.scale = function(t, e, n) {
              return (
                (t[0] = e[0] * n),
                (t[1] = e[1] * n),
                (t[2] = e[2] * n),
                (t[3] = e[3] * n),
                t
              );
            }),
            (e.scaleAndAdd = function(t, e, n, r) {
              return (
                (t[0] = e[0] + n[0] * r),
                (t[1] = e[1] + n[1] * r),
                (t[2] = e[2] + n[2] * r),
                (t[3] = e[3] + n[3] * r),
                t
              );
            }),
            (e.distance = s),
            (e.squaredDistance = u),
            (e.length = c),
            (e.squaredLength = l),
            (e.negate = function(t, e) {
              return (
                (t[0] = -e[0]),
                (t[1] = -e[1]),
                (t[2] = -e[2]),
                (t[3] = -e[3]),
                t
              );
            }),
            (e.inverse = function(t, e) {
              return (
                (t[0] = 1 / e[0]),
                (t[1] = 1 / e[1]),
                (t[2] = 1 / e[2]),
                (t[3] = 1 / e[3]),
                t
              );
            }),
            (e.normalize = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = n * n + r * r + i * i + a * a;
              return (
                o > 0 &&
                  ((o = 1 / Math.sqrt(o)),
                  (t[0] = n * o),
                  (t[1] = r * o),
                  (t[2] = i * o),
                  (t[3] = a * o)),
                t
              );
            }),
            (e.dot = function(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
            }),
            (e.lerp = function(t, e, n, r) {
              var i = e[0],
                a = e[1],
                o = e[2],
                s = e[3];
              return (
                (t[0] = i + r * (n[0] - i)),
                (t[1] = a + r * (n[1] - a)),
                (t[2] = o + r * (n[2] - o)),
                (t[3] = s + r * (n[3] - s)),
                t
              );
            }),
            (e.random = function(t, e) {
              var n, r, i, a, o, s;
              e = e || 1;
              do {
                o = (n = 2 * f.RANDOM() - 1) * n + (r = 2 * f.RANDOM() - 1) * r;
              } while (o >= 1);
              do {
                s = (i = 2 * f.RANDOM() - 1) * i + (a = 2 * f.RANDOM() - 1) * a;
              } while (s >= 1);
              var u = Math.sqrt((1 - o) / s);
              return (
                (t[0] = e * n),
                (t[1] = e * r),
                (t[2] = e * i * u),
                (t[3] = e * a * u),
                t
              );
            }),
            (e.transformMat4 = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3];
              return (
                (t[0] = n[0] * r + n[4] * i + n[8] * a + n[12] * o),
                (t[1] = n[1] * r + n[5] * i + n[9] * a + n[13] * o),
                (t[2] = n[2] * r + n[6] * i + n[10] * a + n[14] * o),
                (t[3] = n[3] * r + n[7] * i + n[11] * a + n[15] * o),
                t
              );
            }),
            (e.transformQuat = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = n[0],
                s = n[1],
                u = n[2],
                c = n[3],
                l = c * r + s * a - u * i,
                h = c * i + u * r - o * a,
                f = c * a + o * i - s * r,
                d = -o * r - s * i - u * a;
              return (
                (t[0] = l * c + d * -o + h * -u - f * -s),
                (t[1] = h * c + d * -s + f * -o - l * -u),
                (t[2] = f * c + d * -u + l * -s - h * -o),
                (t[3] = e[3]),
                t
              );
            }),
            (e.str = function(t) {
              return (
                "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
              );
            }),
            (e.exactEquals = function(t, e) {
              return (
                t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
              );
            }),
            (e.equals = function(t, e) {
              var n = t[0],
                r = t[1],
                i = t[2],
                a = t[3],
                o = e[0],
                s = e[1],
                u = e[2],
                c = e[3];
              return (
                Math.abs(n - o) <=
                  f.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) &&
                Math.abs(r - s) <=
                  f.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) &&
                Math.abs(i - u) <=
                  f.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) &&
                Math.abs(a - c) <=
                  f.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
              );
            });
          var h,
            f = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(3));
          (e.sub = i),
            (e.mul = a),
            (e.div = o),
            (e.dist = s),
            (e.sqrDist = u),
            (e.len = c),
            (e.sqrLen = l),
            (e.forEach =
              ((h = r()),
              function(t, e, n, r, i, a) {
                var o,
                  s = void 0;
                for (
                  e || (e = 4),
                    n || (n = 0),
                    o = r ? Math.min(r * e + n, t.length) : t.length,
                    s = n;
                  s < o;
                  s += e
                )
                  (h[0] = t[s]),
                    (h[1] = t[s + 1]),
                    (h[2] = t[s + 2]),
                    (h[3] = t[s + 3]),
                    i(h, h, a),
                    (t[s] = h[0]),
                    (t[s + 1] = h[1]),
                    (t[s + 2] = h[2]),
                    (t[s + 3] = h[3]);
                return t;
              }));
        },
        function(t, e, n) {
          "use strict";
          t.exports = {
            ACTIVE_ATTRIBUTES: 35721,
            ACTIVE_ATTRIBUTE_MAX_LENGTH: 35722,
            ACTIVE_TEXTURE: 34016,
            ACTIVE_UNIFORMS: 35718,
            ACTIVE_UNIFORM_MAX_LENGTH: 35719,
            ALIASED_LINE_WIDTH_RANGE: 33902,
            ALIASED_POINT_SIZE_RANGE: 33901,
            ALPHA: 6406,
            ALPHA_BITS: 3413,
            ALWAYS: 519,
            ARRAY_BUFFER: 34962,
            ARRAY_BUFFER_BINDING: 34964,
            ATTACHED_SHADERS: 35717,
            BACK: 1029,
            BLEND: 3042,
            BLEND_COLOR: 32773,
            BLEND_DST_ALPHA: 32970,
            BLEND_DST_RGB: 32968,
            BLEND_EQUATION: 32777,
            BLEND_EQUATION_ALPHA: 34877,
            BLEND_EQUATION_RGB: 32777,
            BLEND_SRC_ALPHA: 32971,
            BLEND_SRC_RGB: 32969,
            BLUE_BITS: 3412,
            BOOL: 35670,
            BOOL_VEC2: 35671,
            BOOL_VEC3: 35672,
            BOOL_VEC4: 35673,
            BROWSER_DEFAULT_WEBGL: 37444,
            BUFFER_SIZE: 34660,
            BUFFER_USAGE: 34661,
            BYTE: 5120,
            CCW: 2305,
            CLAMP_TO_EDGE: 33071,
            COLOR_ATTACHMENT0: 36064,
            COLOR_BUFFER_BIT: 16384,
            COLOR_CLEAR_VALUE: 3106,
            COLOR_WRITEMASK: 3107,
            COMPILE_STATUS: 35713,
            COMPRESSED_TEXTURE_FORMATS: 34467,
            CONSTANT_ALPHA: 32771,
            CONSTANT_COLOR: 32769,
            CONTEXT_LOST_WEBGL: 37442,
            CULL_FACE: 2884,
            CULL_FACE_MODE: 2885,
            CURRENT_PROGRAM: 35725,
            CURRENT_VERTEX_ATTRIB: 34342,
            CW: 2304,
            DECR: 7683,
            DECR_WRAP: 34056,
            DELETE_STATUS: 35712,
            DEPTH_ATTACHMENT: 36096,
            DEPTH_BITS: 3414,
            DEPTH_BUFFER_BIT: 256,
            DEPTH_CLEAR_VALUE: 2931,
            DEPTH_COMPONENT: 6402,
            RED: 6403,
            DEPTH_COMPONENT16: 33189,
            DEPTH_FUNC: 2932,
            DEPTH_RANGE: 2928,
            DEPTH_STENCIL: 34041,
            DEPTH_STENCIL_ATTACHMENT: 33306,
            DEPTH_TEST: 2929,
            DEPTH_WRITEMASK: 2930,
            DITHER: 3024,
            DONT_CARE: 4352,
            DST_ALPHA: 772,
            DST_COLOR: 774,
            DYNAMIC_DRAW: 35048,
            ELEMENT_ARRAY_BUFFER: 34963,
            ELEMENT_ARRAY_BUFFER_BINDING: 34965,
            EQUAL: 514,
            FASTEST: 4353,
            FLOAT: 5126,
            FLOAT_MAT2: 35674,
            FLOAT_MAT3: 35675,
            FLOAT_MAT4: 35676,
            FLOAT_VEC2: 35664,
            FLOAT_VEC3: 35665,
            FLOAT_VEC4: 35666,
            FRAGMENT_SHADER: 35632,
            FRAMEBUFFER: 36160,
            FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
            FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
            FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
            FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
            FRAMEBUFFER_BINDING: 36006,
            FRAMEBUFFER_COMPLETE: 36053,
            FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
            FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
            FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
            FRAMEBUFFER_UNSUPPORTED: 36061,
            FRONT: 1028,
            FRONT_AND_BACK: 1032,
            FRONT_FACE: 2886,
            FUNC_ADD: 32774,
            FUNC_REVERSE_SUBTRACT: 32779,
            FUNC_SUBTRACT: 32778,
            GENERATE_MIPMAP_HINT: 33170,
            GEQUAL: 518,
            GREATER: 516,
            GREEN_BITS: 3411,
            HIGH_FLOAT: 36338,
            HIGH_INT: 36341,
            INCR: 7682,
            INCR_WRAP: 34055,
            INFO_LOG_LENGTH: 35716,
            INT: 5124,
            INT_VEC2: 35667,
            INT_VEC3: 35668,
            INT_VEC4: 35669,
            INVALID_ENUM: 1280,
            INVALID_FRAMEBUFFER_OPERATION: 1286,
            INVALID_OPERATION: 1282,
            INVALID_VALUE: 1281,
            INVERT: 5386,
            KEEP: 7680,
            LEQUAL: 515,
            LESS: 513,
            LINEAR: 9729,
            LINEAR_MIPMAP_LINEAR: 9987,
            LINEAR_MIPMAP_NEAREST: 9985,
            LINES: 1,
            LINE_LOOP: 2,
            LINE_STRIP: 3,
            LINE_WIDTH: 2849,
            LINK_STATUS: 35714,
            LOW_FLOAT: 36336,
            LOW_INT: 36339,
            LUMINANCE: 6409,
            LUMINANCE_ALPHA: 6410,
            MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
            MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
            MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
            MAX_RENDERBUFFER_SIZE: 34024,
            MAX_TEXTURE_IMAGE_UNITS: 34930,
            MAX_TEXTURE_SIZE: 3379,
            MAX_VARYING_VECTORS: 36348,
            MAX_VERTEX_ATTRIBS: 34921,
            MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
            MAX_VERTEX_UNIFORM_VECTORS: 36347,
            MAX_VIEWPORT_DIMS: 3386,
            MEDIUM_FLOAT: 36337,
            MEDIUM_INT: 36340,
            MIRRORED_REPEAT: 33648,
            NEAREST: 9728,
            NEAREST_MIPMAP_LINEAR: 9986,
            NEAREST_MIPMAP_NEAREST: 9984,
            NEVER: 512,
            NICEST: 4354,
            NONE: 0,
            NOTEQUAL: 517,
            NO_ERROR: 0,
            NUM_COMPRESSED_TEXTURE_FORMATS: 34466,
            ONE: 1,
            ONE_MINUS_CONSTANT_ALPHA: 32772,
            ONE_MINUS_CONSTANT_COLOR: 32770,
            ONE_MINUS_DST_ALPHA: 773,
            ONE_MINUS_DST_COLOR: 775,
            ONE_MINUS_SRC_ALPHA: 771,
            ONE_MINUS_SRC_COLOR: 769,
            OUT_OF_MEMORY: 1285,
            PACK_ALIGNMENT: 3333,
            POINTS: 0,
            POLYGON_OFFSET_FACTOR: 32824,
            POLYGON_OFFSET_FILL: 32823,
            POLYGON_OFFSET_UNITS: 10752,
            RED_BITS: 3410,
            RENDERBUFFER: 36161,
            RENDERBUFFER_ALPHA_SIZE: 36179,
            RENDERBUFFER_BINDING: 36007,
            RENDERBUFFER_BLUE_SIZE: 36178,
            RENDERBUFFER_DEPTH_SIZE: 36180,
            RENDERBUFFER_GREEN_SIZE: 36177,
            RENDERBUFFER_HEIGHT: 36163,
            RENDERBUFFER_INTERNAL_FORMAT: 36164,
            RENDERBUFFER_RED_SIZE: 36176,
            RENDERBUFFER_STENCIL_SIZE: 36181,
            RENDERBUFFER_WIDTH: 36162,
            RENDERER: 7937,
            REPEAT: 10497,
            REPLACE: 7681,
            RGB: 6407,
            RGB5_A1: 32855,
            RGB565: 36194,
            RGBA: 6408,
            RGBA4: 32854,
            SAMPLER_2D: 35678,
            SAMPLER_CUBE: 35680,
            SAMPLES: 32937,
            SAMPLE_ALPHA_TO_COVERAGE: 32926,
            SAMPLE_BUFFERS: 32936,
            SAMPLE_COVERAGE: 32928,
            SAMPLE_COVERAGE_INVERT: 32939,
            SAMPLE_COVERAGE_VALUE: 32938,
            SCISSOR_BOX: 3088,
            SCISSOR_TEST: 3089,
            SHADER_COMPILER: 36346,
            SHADER_SOURCE_LENGTH: 35720,
            SHADER_TYPE: 35663,
            SHADING_LANGUAGE_VERSION: 35724,
            SHORT: 5122,
            SRC_ALPHA: 770,
            SRC_ALPHA_SATURATE: 776,
            SRC_COLOR: 768,
            STATIC_DRAW: 35044,
            STENCIL_ATTACHMENT: 36128,
            STENCIL_BACK_FAIL: 34817,
            STENCIL_BACK_FUNC: 34816,
            STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
            STENCIL_BACK_PASS_DEPTH_PASS: 34819,
            STENCIL_BACK_REF: 36003,
            STENCIL_BACK_VALUE_MASK: 36004,
            STENCIL_BACK_WRITEMASK: 36005,
            STENCIL_BITS: 3415,
            STENCIL_BUFFER_BIT: 1024,
            STENCIL_CLEAR_VALUE: 2961,
            STENCIL_FAIL: 2964,
            STENCIL_FUNC: 2962,
            STENCIL_INDEX: 6401,
            STENCIL_INDEX8: 36168,
            STENCIL_PASS_DEPTH_FAIL: 2965,
            STENCIL_PASS_DEPTH_PASS: 2966,
            STENCIL_REF: 2967,
            STENCIL_TEST: 2960,
            STENCIL_VALUE_MASK: 2963,
            STENCIL_WRITEMASK: 2968,
            STREAM_DRAW: 35040,
            SUBPIXEL_BITS: 3408,
            TEXTURE: 5890,
            TEXTURE0: 33984,
            TEXTURE1: 33985,
            TEXTURE2: 33986,
            TEXTURE3: 33987,
            TEXTURE4: 33988,
            TEXTURE5: 33989,
            TEXTURE6: 33990,
            TEXTURE7: 33991,
            TEXTURE8: 33992,
            TEXTURE9: 33993,
            TEXTURE10: 33994,
            TEXTURE11: 33995,
            TEXTURE12: 33996,
            TEXTURE13: 33997,
            TEXTURE14: 33998,
            TEXTURE15: 33999,
            TEXTURE16: 34e3,
            TEXTURE17: 34001,
            TEXTURE18: 34002,
            TEXTURE19: 34003,
            TEXTURE20: 34004,
            TEXTURE21: 34005,
            TEXTURE22: 34006,
            TEXTURE23: 34007,
            TEXTURE24: 34008,
            TEXTURE25: 34009,
            TEXTURE26: 34010,
            TEXTURE27: 34011,
            TEXTURE28: 34012,
            TEXTURE29: 34013,
            TEXTURE30: 34014,
            TEXTURE31: 34015,
            TEXTURE_2D: 3553,
            TEXTURE_BINDING_2D: 32873,
            TEXTURE_BINDING_CUBE_MAP: 34068,
            TEXTURE_CUBE_MAP: 34067,
            TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
            TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
            TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
            TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
            TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
            TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
            TEXTURE_MAG_FILTER: 10240,
            TEXTURE_MIN_FILTER: 10241,
            TEXTURE_WRAP_S: 10242,
            TEXTURE_WRAP_T: 10243,
            TRIANGLES: 4,
            TRIANGLE_FAN: 6,
            TRIANGLE_STRIP: 5,
            UNPACK_ALIGNMENT: 3317,
            UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
            UNPACK_FLIP_Y_WEBGL: 37440,
            UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
            UNSIGNED_BYTE: 5121,
            UNSIGNED_INT: 5125,
            UNSIGNED_SHORT: 5123,
            UNSIGNED_SHORT_4_4_4_4: 32819,
            UNSIGNED_SHORT_5_5_5_1: 32820,
            UNSIGNED_SHORT_5_6_5: 33635,
            VALIDATE_STATUS: 35715,
            VENDOR: 7936,
            VERSION: 7938,
            VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
            VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
            VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
            VERTEX_ATTRIB_ARRAY_POINTER: 34373,
            VERTEX_ATTRIB_ARRAY_SIZE: 34339,
            VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
            VERTEX_ATTRIB_ARRAY_TYPE: 34341,
            VERTEX_SHADER: 35633,
            VIEWPORT: 2978,
            ZERO: 0,
            R8: 33321
          };
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function(t, e, n) {
              return (
                void 0 === e.cacheAttribLoc && (e.cacheAttribLoc = {}),
                void 0 === e.cacheAttribLoc[n] &&
                  (e.cacheAttribLoc[n] = t.getAttribLocation(e, n)),
                e.cacheAttribLoc[n]
              );
            });
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function i(t) {
            return 0 !== t && !(t & (t - 1));
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var a = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = r(n(0)),
            s = void r(n(8)),
            u = (function() {
              function t(e) {
                var n,
                  r,
                  a,
                  u =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  c =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if (
                  ((function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (s = o.default.gl),
                  u)
                )
                  this._texture = e;
                else {
                  (this._mSource = e),
                    (this._texture = s.createTexture()),
                    (this._isVideo = "VIDEO" === e.tagName),
                    (this._premultiplyAlpha = !0),
                    (this._magFilter = c.magFilter || s.LINEAR),
                    (this._minFilter = c.minFilter || s.NEAREST_MIPMAP_LINEAR),
                    (this._wrapS = c.wrapS || s.MIRRORED_REPEAT),
                    (this._wrapT = c.wrapT || s.MIRRORED_REPEAT),
                    e.width || e.videoWidth
                      ? ((r = (n = e).width || n.videoWidth),
                        (a = n.height || n.videoHeight),
                        (!(!r || !a) && i(r) && i(a)) ||
                          ((this._wrapS = this._wrapT = s.CLAMP_TO_EDGE),
                          this._minFilter === s.NEAREST_MIPMAP_LINEAR &&
                            (this._minFilter = s.LINEAR)))
                      : ((this._wrapS = this._wrapT = s.CLAMP_TO_EDGE),
                        this._minFilter === s.NEAREST_MIPMAP_LINEAR &&
                          (this._minFilter = s.LINEAR)),
                    s.bindTexture(s.TEXTURE_2D, this._texture),
                    s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, !0),
                    e.exposure
                      ? s.texImage2D(
                          s.TEXTURE_2D,
                          0,
                          s.RGBA,
                          e.shape[0],
                          e.shape[1],
                          0,
                          s.RGBA,
                          s.FLOAT,
                          e.data
                        )
                      : s.texImage2D(
                          s.TEXTURE_2D,
                          0,
                          s.RGBA,
                          s.RGBA,
                          s.UNSIGNED_BYTE,
                          e
                        ),
                    s.texParameteri(
                      s.TEXTURE_2D,
                      s.TEXTURE_MAG_FILTER,
                      this._magFilter
                    ),
                    s.texParameteri(
                      s.TEXTURE_2D,
                      s.TEXTURE_MIN_FILTER,
                      this._minFilter
                    ),
                    s.texParameteri(
                      s.TEXTURE_2D,
                      s.TEXTURE_WRAP_S,
                      this._wrapS
                    ),
                    s.texParameteri(
                      s.TEXTURE_2D,
                      s.TEXTURE_WRAP_T,
                      this._wrapT
                    );
                  var l = o.default.getExtension(
                    "EXT_texture_filter_anisotropic"
                  );
                  if (l) {
                    var h = s.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    s.texParameterf(
                      s.TEXTURE_2D,
                      l.TEXTURE_MAX_ANISOTROPY_EXT,
                      h
                    );
                  }
                  this._canGenerateMipmap() && s.generateMipmap(s.TEXTURE_2D),
                    s.bindTexture(s.TEXTURE_2D, null);
                }
              }
              return (
                a(t, [
                  {
                    key: "generateMipmap",
                    value: function() {
                      this._canGenerateMipmap() &&
                        (s.bindTexture(s.TEXTURE_2D, this._texture),
                        s.generateMipmap(s.TEXTURE_2D),
                        s.bindTexture(s.TEXTURE_2D, null));
                    }
                  },
                  {
                    key: "updateTexture",
                    value: function(t) {
                      t && (this._mSource = t),
                        s.bindTexture(s.TEXTURE_2D, this._texture),
                        s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, !0),
                        s.texImage2D(
                          s.TEXTURE_2D,
                          0,
                          s.RGBA,
                          s.RGBA,
                          s.UNSIGNED_BYTE,
                          this._mSource
                        ),
                        s.texParameteri(
                          s.TEXTURE_2D,
                          s.TEXTURE_MAG_FILTER,
                          this._magFilter
                        ),
                        s.texParameteri(
                          s.TEXTURE_2D,
                          s.TEXTURE_MIN_FILTER,
                          this._minFilter
                        ),
                        this._canGenerateMipmap() &&
                          s.generateMipmap(s.TEXTURE_2D),
                        s.bindTexture(s.TEXTURE_2D, null);
                    }
                  },
                  {
                    key: "bind",
                    value: function(t) {
                      void 0 === t && (t = 0),
                        o.default.shader &&
                          (s.activeTexture(s.TEXTURE0 + t),
                          s.bindTexture(s.TEXTURE_2D, this._texture),
                          (this._bindIndex = t));
                    }
                  },
                  {
                    key: "_canGenerateMipmap",
                    value: function() {
                      return (
                        this._minFilter === s.LINEAR_MIPMAP_NEAREST ||
                        this._minFilter === s.NEAREST_MIPMAP_LINEAR ||
                        this._minFilter === s.LINEAR_MIPMAP_LINEAR ||
                        this._minFilter === s.NEAREST_MIPMAP_NEAREST
                      );
                    }
                  },
                  {
                    key: "minFilter",
                    set: function(t) {
                      if (
                        t !== s.LINEAR &&
                        t !== s.NEAREST &&
                        t !== s.NEAREST_MIPMAP_LINEAR &&
                        t !== s.NEAREST_MIPMAP_LINEAR &&
                        t !== s.LINEAR_MIPMAP_LINEAR &&
                        t !== s.NEAREST_MIPMAP_NEAREST
                      )
                        return this;
                      (this._minFilter = t),
                        s.bindTexture(s.TEXTURE_2D, this._texture),
                        s.texParameteri(
                          s.TEXTURE_2D,
                          s.TEXTURE_MIN_FILTER,
                          this._minFilter
                        ),
                        s.bindTexture(s.TEXTURE_2D, null);
                    },
                    get: function() {
                      return this._minFilter;
                    }
                  },
                  {
                    key: "magFilter",
                    set: function(t) {
                      if (t !== s.LINEAR && t !== s.NEAREST) return this;
                      (this._magFilter = t),
                        s.bindTexture(s.TEXTURE_2D, this._texture),
                        s.texParameteri(
                          s.TEXTURE_2D,
                          s.TEXTURE_MAG_FILTER,
                          this._magFilter
                        ),
                        s.bindTexture(s.TEXTURE_2D, null);
                    },
                    get: function() {
                      return this._magFilter;
                    }
                  },
                  {
                    key: "wrapS",
                    set: function(t) {
                      if (
                        t !== s.CLAMP_TO_EDGE &&
                        t !== s.REPEAT &&
                        t !== s.MIRRORED_REPEAT
                      )
                        return this;
                      (this._wrapS = t),
                        s.bindTexture(s.TEXTURE_2D, this._texture),
                        s.texParameteri(
                          s.TEXTURE_2D,
                          s.TEXTURE_WRAP_S,
                          this._wrapS
                        ),
                        s.bindTexture(s.TEXTURE_2D, null);
                    },
                    get: function() {
                      return this._wrapS;
                    }
                  },
                  {
                    key: "wrapT",
                    set: function(t) {
                      if (
                        t !== s.CLAMP_TO_EDGE &&
                        t !== s.REPEAT &&
                        t !== s.MIRRORED_REPEAT
                      )
                        return this;
                      (this._wrapT = t),
                        s.bindTexture(s.TEXTURE_2D, this._texture),
                        s.texParameteri(
                          s.TEXTURE_2D,
                          s.TEXTURE_WRAP_T,
                          this._wrapT
                        ),
                        s.bindTexture(s.TEXTURE_2D, null);
                    },
                    get: function() {
                      return this._wrapT;
                    }
                  },
                  {
                    key: "premultiplyAlpha",
                    set: function(t) {
                      (this._premultiplyAlpha = t),
                        s.bindTexture(s.TEXTURE_2D, this._texture),
                        console.log("premultiplyAlpha:", t),
                        s.pixelStorei(
                          s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                          this._premultiplyAlpha
                        ),
                        s.bindTexture(s.TEXTURE_2D, null);
                    },
                    get: function() {
                      return this._premultiplyAlpha;
                    }
                  },
                  {
                    key: "texture",
                    get: function() {
                      return this._texture;
                    }
                  }
                ]),
                t
              );
            })(),
            c = void 0,
            l = void 0,
            h = void 0;
          (u.whiteTexture = function() {
            if (void 0 === c) {
              var t = document.createElement("canvas");
              t.width = t.height = 4;
              var e = t.getContext("2d");
              (e.fillStyle = "#fff"), e.fillRect(0, 0, 4, 4), (c = new u(t));
            }
            return c;
          }),
            (u.greyTexture = function() {
              if (void 0 === l) {
                var t = document.createElement("canvas");
                t.width = t.height = 4;
                var e = t.getContext("2d");
                (e.fillStyle = "rgb(127, 127, 127)"),
                  e.fillRect(0, 0, 4, 4),
                  (l = new u(t));
              }
              return l;
            }),
            (u.blackTexture = function() {
              if (void 0 === h) {
                var t = document.createElement("canvas");
                t.width = t.height = 4;
                var e = t.getContext("2d");
                (e.fillStyle = "rgb(127, 127, 127)"),
                  e.fillRect(0, 0, 4, 4),
                  (h = new u(t));
              }
              return h;
            }),
            (e.default = u);
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function i(t) {
            return 0 !== t && !(t & (t - 1));
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var a = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = r(n(49)),
            s = r(n(8)),
            u = r(n(0)),
            c = r(n(4)),
            l = void 0,
            h = (function() {
              function t(e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (l = u.default.gl),
                  (this._source = e),
                  this._getDimension(e, i, a),
                  (this._sourceType =
                    n.type ||
                    (function(t) {
                      var e = u.default.UNSIGNED_BYTE;
                      return (
                        t instanceof Array
                          ? (e = u.default.UNSIGNED_BYTE)
                          : t instanceof Uint8Array
                          ? (e = u.default.UNSIGNED_BYTE)
                          : t instanceof Float32Array
                          ? (e = u.default.FLOAT)
                          : t instanceof HTMLImageElement
                          ? (e = "image")
                          : t instanceof HTMLCanvasElement
                          ? (e = "canvas")
                          : t instanceof HTMLVideoElement && (e = "video"),
                        e
                      );
                    })(e)),
                  this._checkSource(),
                  (this._texelType = this._getTexelType()),
                  (this._isTextureReady = !0),
                  (this._params = (0, o.default)(
                    n,
                    e,
                    this._width,
                    this._height
                  )),
                  this._checkMipmap(),
                  this._checkWrapping(),
                  (this._texture = l.createTexture()),
                  "video" === this._sourceType
                    ? ((this._isTextureReady = !1),
                      c.default.addEF(function() {
                        return r._loop();
                      }))
                    : this._uploadTexture();
              }
              return (
                a(t, [
                  {
                    key: "_loop",
                    value: function() {
                      4 == this._source.readyState &&
                        ((this._isTextureReady = !0), this._uploadTexture());
                    }
                  },
                  {
                    key: "_uploadTexture",
                    value: function() {
                      l.bindTexture(l.TEXTURE_2D, this._texture),
                        l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, !0),
                        this._isSourceHtmlElement()
                          ? l.texImage2D(
                              l.TEXTURE_2D,
                              0,
                              this._params.internalFormat,
                              this._params.format,
                              this._texelType,
                              this._source
                            )
                          : l.texImage2D(
                              l.TEXTURE_2D,
                              0,
                              this._params.internalFormat,
                              this._width,
                              this._height,
                              0,
                              this._params.format,
                              this._texelType,
                              this._source
                            ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_MAG_FILTER,
                          this._params.magFilter
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_MIN_FILTER,
                          this._params.minFilter
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_WRAP_S,
                          this._params.wrapS
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_WRAP_T,
                          this._params.wrapT
                        ),
                        l.pixelStorei(
                          l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                          this._premultiplyAlpha
                        ),
                        this._generateMipmap && l.generateMipmap(l.TEXTURE_2D),
                        l.bindTexture(l.TEXTURE_2D, null);
                    }
                  },
                  {
                    key: "bind",
                    value: function(e) {
                      void 0 === e && (e = 0),
                        u.default.shader &&
                          (l.activeTexture(l.TEXTURE0 + e),
                          this._isTextureReady
                            ? l.bindTexture(l.TEXTURE_2D, this._texture)
                            : l.bindTexture(
                                l.TEXTURE_2D,
                                t.blackTexture().texture
                              ),
                          (this._bindIndex = e));
                    }
                  },
                  {
                    key: "updateTexture",
                    value: function(t) {
                      (this._source = t),
                        this._checkSource(),
                        this._uploadTexture();
                    }
                  },
                  {
                    key: "generateMipmap",
                    value: function() {
                      this._generateMipmap &&
                        (l.bindTexture(l.TEXTURE_2D, this._texture),
                        l.generateMipmap(l.TEXTURE_2D),
                        l.bindTexture(l.TEXTURE_2D, null));
                    }
                  },
                  {
                    key: "showParameters",
                    value: function() {
                      for (var t in (console.log(
                        "Source type : ",
                        s.default[this._sourceType] || this._sourceType
                      ),
                      console.log("Texel type:", s.default[this.texelType]),
                      console.log("Dimension :", this._width, this._height),
                      this._params))
                        console.log(
                          t,
                          s.default[this._params[t]] || this._params[t]
                        );
                      console.log("Mipmapping :", this._generateMipmap);
                    }
                  },
                  {
                    key: "_getDimension",
                    value: function(t, e, n) {
                      t
                        ? ((this._width = t.width || t.videoWidth),
                          (this._height = t.height || t.videoWidth),
                          (this._width = this._width || e),
                          (this._height = this._height || n),
                          (this._width && this._height) ||
                            (this._width = this._height = Math.sqrt(
                              t.length / 4
                            )))
                        : ((this._width = e), (this._height = n));
                    }
                  },
                  {
                    key: "_checkSource",
                    value: function() {
                      this._source &&
                        (this._sourceType === u.default.UNSIGNED_BYTE
                          ? this._source instanceof Uint8Array ||
                            (this._source = new Uint8Array(this._source))
                          : this._sourceType === u.default.FLOAT &&
                            (this._source instanceof Float32Array ||
                              (this._source = new Float32Array(this._source))));
                    }
                  },
                  {
                    key: "_getTexelType",
                    value: function() {
                      return this._isSourceHtmlElement()
                        ? u.default.UNSIGNED_BYTE
                        : u.default[s.default[this._sourceType]];
                    }
                  },
                  {
                    key: "_checkMipmap",
                    value: function() {
                      (this._generateMipmap = this._params.mipmap),
                        (i(this._width) && i(this._height)) ||
                          (this._generateMipmap = !1),
                        -1 ==
                          s.default[this._params.minFilter].indexOf("MIPMAP") &&
                          (this._generateMipmap = !1);
                    }
                  },
                  {
                    key: "_checkWrapping",
                    value: function() {
                      this._generateMipmap ||
                        ((this._params.wrapS = u.default.CLAMP_TO_EDGE),
                        (this._params.wrapT = u.default.CLAMP_TO_EDGE));
                    }
                  },
                  {
                    key: "_isSourceHtmlElement",
                    value: function() {
                      return (
                        "image" === this._sourceType ||
                        "video" === this._sourceType ||
                        "canvas" === this._sourceType
                      );
                    }
                  },
                  {
                    key: "minFilter",
                    get: function() {
                      return this._params.minFilter;
                    },
                    set: function(t) {
                      console.log("set min filter : ", s.default[t]),
                        (this._params.minFilter = t),
                        this._checkMipmap(),
                        l.bindTexture(l.TEXTURE_2D, this._texture),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_MIN_FILTER,
                          this._params.minFilter
                        ),
                        l.bindTexture(l.TEXTURE_2D, null),
                        this.generateMipmap();
                    }
                  },
                  {
                    key: "magFilter",
                    get: function() {
                      return this._params.minFilter;
                    },
                    set: function(t) {
                      console.log("set mag filter : ", s.default[t]),
                        (this._params.magFilter = t),
                        l.bindTexture(l.TEXTURE_2D, this._texture),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_MAG_FILTER,
                          this._params.magFilter
                        ),
                        l.bindTexture(l.TEXTURE_2D, null);
                    }
                  },
                  {
                    key: "wrapS",
                    get: function() {
                      return this._params.wrapS;
                    },
                    set: function(t) {
                      (this._params.wrapS = t),
                        this._checkWrapping(),
                        l.bindTexture(l.TEXTURE_2D, this._texture),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_WRAP_S,
                          this._params.wrapS
                        ),
                        l.bindTexture(l.TEXTURE_2D, null);
                    }
                  },
                  {
                    key: "wrapT",
                    get: function() {
                      return this._params.wrapT;
                    },
                    set: function(t) {
                      (this._params.wrapT = t),
                        this._checkWrapping(),
                        l.bindTexture(l.TEXTURE_2D, this._texture),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_WRAP_T,
                          this._params.wrapT
                        ),
                        l.bindTexture(l.TEXTURE_2D, null);
                    }
                  },
                  {
                    key: "texelType",
                    get: function() {
                      return this._texelType;
                    }
                  },
                  {
                    key: "width",
                    get: function() {
                      return this._width;
                    }
                  },
                  {
                    key: "height",
                    get: function() {
                      return this._height;
                    }
                  },
                  {
                    key: "texture",
                    get: function() {
                      return this._texture;
                    }
                  },
                  {
                    key: "isTextureReady",
                    get: function() {
                      return this._isTextureReady;
                    }
                  }
                ]),
                t
              );
            })(),
            f = void 0,
            d = void 0,
            _ = void 0;
          (h.whiteTexture = function() {
            if (void 0 === f) {
              var t = document.createElement("canvas");
              t.width = t.height = 2;
              var e = t.getContext("2d");
              (e.fillStyle = "#fff"), e.fillRect(0, 0, 2, 2), (f = new h(t));
            }
            return f;
          }),
            (h.greyTexture = function() {
              if (void 0 === d) {
                var t = document.createElement("canvas");
                t.width = t.height = 2;
                var e = t.getContext("2d");
                (e.fillStyle = "rgb(127, 127, 127)"),
                  e.fillRect(0, 0, 2, 2),
                  (d = new h(t));
              }
              return d;
            }),
            (h.blackTexture = function() {
              if (void 0 === _) {
                var t = document.createElement("canvas");
                t.width = t.height = 2;
                var e = t.getContext("2d");
                (e.fillStyle = "rgb(0, 0, 0)"),
                  e.fillRect(0, 0, 2, 2),
                  (_ = new h(t));
              }
              return _;
            }),
            (e.default = h);
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = r(n(50)),
            s = void 0,
            u = (function() {
              function t(e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                if (
                  ((function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (s = a.default.gl),
                  r)
                )
                  this.texture = e;
                else {
                  var i = e.length > 6;
                  e[0].mipmapCount && (i = e[0].mipmapCount > 1),
                    (this.texture = s.createTexture()),
                    (this.magFilter = n.magFilter || s.LINEAR),
                    (this.minFilter = n.minFilter || s.LINEAR_MIPMAP_LINEAR),
                    (this.wrapS = n.wrapS || s.CLAMP_TO_EDGE),
                    (this.wrapT = n.wrapT || s.CLAMP_TO_EDGE),
                    i ||
                      this.minFilter != s.LINEAR_MIPMAP_LINEAR ||
                      (this.minFilter = s.LINEAR),
                    s.bindTexture(s.TEXTURE_CUBE_MAP, this.texture);
                  var o,
                    u = [
                      s.TEXTURE_CUBE_MAP_POSITIVE_X,
                      s.TEXTURE_CUBE_MAP_NEGATIVE_X,
                      s.TEXTURE_CUBE_MAP_POSITIVE_Y,
                      s.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                      s.TEXTURE_CUBE_MAP_POSITIVE_Z,
                      s.TEXTURE_CUBE_MAP_NEGATIVE_Z
                    ],
                    c = 0;
                  if (((o = e.length / 6), (this.numLevels = o), i))
                    for (var l = 0; l < 6; l++)
                      for (var h = 0; h < o; h++)
                        s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, !1),
                          e[(c = l * o + h)].shape
                            ? s.texImage2D(
                                u[l],
                                h,
                                s.RGBA,
                                e[c].shape[0],
                                e[c].shape[1],
                                0,
                                s.RGBA,
                                s.FLOAT,
                                e[c].data
                              )
                            : s.texImage2D(
                                u[l],
                                h,
                                s.RGBA,
                                s.RGBA,
                                s.UNSIGNED_BYTE,
                                e[c]
                              ),
                          s.texParameteri(
                            s.TEXTURE_CUBE_MAP,
                            s.TEXTURE_WRAP_S,
                            this.wrapS
                          ),
                          s.texParameteri(
                            s.TEXTURE_CUBE_MAP,
                            s.TEXTURE_WRAP_T,
                            this.wrapT
                          ),
                          s.texParameteri(
                            s.TEXTURE_CUBE_MAP,
                            s.TEXTURE_MAG_FILTER,
                            this.magFilter
                          ),
                          s.texParameteri(
                            s.TEXTURE_CUBE_MAP,
                            s.TEXTURE_MIN_FILTER,
                            this.minFilter
                          );
                  else {
                    for (var f = 0, d = 0; d < 6; d++)
                      (f = d * o),
                        s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, !1),
                        e[f].shape
                          ? s.texImage2D(
                              u[d],
                              0,
                              s.RGBA,
                              e[f].shape[0],
                              e[f].shape[1],
                              0,
                              s.RGBA,
                              s.FLOAT,
                              e[f].data
                            )
                          : s.texImage2D(
                              u[d],
                              0,
                              s.RGBA,
                              s.RGBA,
                              s.UNSIGNED_BYTE,
                              e[f]
                            ),
                        s.texParameteri(
                          s.TEXTURE_CUBE_MAP,
                          s.TEXTURE_WRAP_S,
                          this.wrapS
                        ),
                        s.texParameteri(
                          s.TEXTURE_CUBE_MAP,
                          s.TEXTURE_WRAP_T,
                          this.wrapT
                        ),
                        s.texParameteri(
                          s.TEXTURE_CUBE_MAP,
                          s.TEXTURE_MAG_FILTER,
                          this.magFilter
                        ),
                        s.texParameteri(
                          s.TEXTURE_CUBE_MAP,
                          s.TEXTURE_MIN_FILTER,
                          this.minFilter
                        );
                    s.generateMipmap(s.TEXTURE_CUBE_MAP);
                  }
                  s.bindTexture(s.TEXTURE_CUBE_MAP, null);
                }
              }
              return (
                i(t, [
                  {
                    key: "bind",
                    value: function() {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0;
                      a.default.shader &&
                        (s.activeTexture(s.TEXTURE0 + t),
                        s.bindTexture(s.TEXTURE_CUBE_MAP, this.texture),
                        s.uniform1i(a.default.shader.uniformTextures[t], t),
                        (this._bindIndex = t));
                    }
                  },
                  {
                    key: "unbind",
                    value: function() {
                      s.bindTexture(s.TEXTURE_CUBE_MAP, null);
                    }
                  }
                ]),
                t
              );
            })();
          (u.parseDDS = function(t) {
            var e = (0, o.default)(t),
              n = e.flags,
              r = new Int32Array(t, 0, 31),
              i = 1;
            131072 & n && (i = Math.max(1, r[7]));
            var a = e.images.map(function(e) {
              return {
                data: new Float32Array(t.slice(e.offset, e.offset + e.length)),
                shape: e.shape,
                mipmapCount: i
              };
            });
            return new u(a);
          }),
            (e.default = u);
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = r(n(26)),
            s = void r(n(8)),
            u = void 0,
            c = !1,
            l = void 0,
            h = function() {
              return (
                !!a.default.webgl2 ||
                !!(l = a.default.getExtension("WEBGL_draw_buffers"))
              );
            },
            f = (function() {
              function t(e, n) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 1;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (s = a.default.gl),
                  (u = a.default.checkExtension("WEBGL_depth_texture")),
                  (this.width = e),
                  (this.height = n),
                  (this._numTargets = i),
                  (this._multipleTargets = i > 1),
                  (this._parameters = r),
                  c || h(),
                  this._multipleTargets && this._checkMaxNumRenderTarget(),
                  this._init();
              }
              return (
                i(t, [
                  {
                    key: "_init",
                    value: function() {
                      if (
                        (this._initTextures(),
                        (this.frameBuffer = s.createFramebuffer()),
                        s.bindFramebuffer(s.FRAMEBUFFER, this.frameBuffer),
                        a.default.webgl2)
                      ) {
                        for (var t = [], e = 0; e < this._numTargets; e++)
                          s.framebufferTexture2D(
                            s.DRAW_FRAMEBUFFER,
                            s.COLOR_ATTACHMENT0 + e,
                            s.TEXTURE_2D,
                            this._textures[e].texture,
                            0
                          ),
                            t.push(s["COLOR_ATTACHMENT" + e]);
                        s.drawBuffers(t),
                          s.framebufferTexture2D(
                            s.DRAW_FRAMEBUFFER,
                            s.DEPTH_ATTACHMENT,
                            s.TEXTURE_2D,
                            this.glDepthTexture.texture,
                            0
                          );
                      } else {
                        for (var n = 0; n < this._numTargets; n++)
                          s.framebufferTexture2D(
                            s.FRAMEBUFFER,
                            s.COLOR_ATTACHMENT0 + n,
                            s.TEXTURE_2D,
                            this._textures[n].texture,
                            0
                          );
                        if (this._multipleTargets) {
                          for (var r = [], i = 0; i < this._numTargets; i++)
                            r.push(l["COLOR_ATTACHMENT" + i + "_WEBGL"]);
                          l.drawBuffersWEBGL(r);
                        }
                        u &&
                          s.framebufferTexture2D(
                            s.FRAMEBUFFER,
                            s.DEPTH_ATTACHMENT,
                            s.TEXTURE_2D,
                            this.glDepthTexture.texture,
                            0
                          );
                      }
                      var o = s.checkFramebufferStatus(s.FRAMEBUFFER);
                      o != s.FRAMEBUFFER_COMPLETE &&
                        (console.error("FBOstatus", o),
                        console.error(
                          "GL_FRAMEBUFFER_COMPLETE failed, CANNOT use Framebuffer"
                        )),
                        s.bindTexture(s.TEXTURE_2D, null),
                        s.bindRenderbuffer(s.RENDERBUFFER, null),
                        s.bindFramebuffer(s.FRAMEBUFFER, null),
                        this.clear();
                    }
                  },
                  {
                    key: "_checkMaxNumRenderTarget",
                    value: function() {
                      var t = a.default.gl.getParameter(
                        l.MAX_DRAW_BUFFERS_WEBGL
                      );
                      this._numTargets > t &&
                        (console.error(
                          "Over max number of draw buffers supported : ",
                          t
                        ),
                        (this._numTargets = t));
                    }
                  },
                  {
                    key: "_initTextures",
                    value: function() {
                      this._textures = [];
                      for (var t = 0; t < this._numTargets; t++) {
                        var e = this._createTexture();
                        this._textures.push(e);
                      }
                      a.default.webgl2
                        ? (this.glDepthTexture = this._createTexture(
                            s.DEPTH_COMPONENT16,
                            s.UNSIGNED_SHORT,
                            s.DEPTH_COMPONENT,
                            !0
                          ))
                        : (this.glDepthTexture = this._createTexture(
                            s.DEPTH_COMPONENT,
                            s.UNSIGNED_SHORT,
                            s.DEPTH_COMPONENT,
                            { minFilter: a.default.LINEAR }
                          ));
                    }
                  },
                  {
                    key: "_createTexture",
                    value: function(t, e, n) {
                      var r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : {},
                        i = Object.assign({}, this._parameters);
                      for (var u in (n || (n = t),
                      (i.internalFormat = t || s.RGBA),
                      (i.format = n),
                      (i.type = i.type || e || a.default.UNSIGNED_BYTE),
                      e === s.UNSIGNED_SHORT && (i.type = e),
                      r))
                        i[u] = r[u];
                      return new o.default(null, i, this.width, this.height);
                    }
                  },
                  {
                    key: "bind",
                    value: function() {
                      (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0]) &&
                        a.default.viewport(0, 0, this.width, this.height),
                        s.bindFramebuffer(s.FRAMEBUFFER, this.frameBuffer);
                    }
                  },
                  {
                    key: "unbind",
                    value: function() {
                      (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0]) &&
                        a.default.viewport(
                          0,
                          0,
                          a.default.width,
                          a.default.height
                        ),
                        s.bindFramebuffer(s.FRAMEBUFFER, null),
                        this._textures.forEach(function(t) {
                          t.generateMipmap();
                        });
                    }
                  },
                  {
                    key: "clear",
                    value: function() {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                        r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0;
                      this.bind(), a.default.clear(t, e, n, r), this.unbind();
                    }
                  },
                  {
                    key: "getTexture",
                    value: function() {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0;
                      return this._textures[t];
                    }
                  },
                  {
                    key: "getDepthTexture",
                    value: function() {
                      return this.glDepthTexture;
                    }
                  },
                  {
                    key: "showParameters",
                    value: function() {
                      this._textures[0].showParameters();
                    }
                  },
                  {
                    key: "texture",
                    get: function() {
                      return this._textures[0];
                    }
                  },
                  {
                    key: "depthTexture",
                    get: function() {
                      return this.glDepthTexture;
                    }
                  },
                  {
                    key: "minFilter",
                    get: function() {
                      return this._textures[0].minFilter;
                    },
                    set: function(t) {
                      this._textures.forEach(function(e) {
                        e.minFilter = t;
                      });
                    }
                  },
                  {
                    key: "magFilter",
                    get: function() {
                      return this._textures[0].magFilter;
                    },
                    set: function(t) {
                      this._textures.forEach(function(e) {
                        e.magFilter = t;
                      });
                    }
                  },
                  {
                    key: "wrapS",
                    get: function() {
                      return this._textures[0].wrapS;
                    },
                    set: function(t) {
                      this._textures.forEach(function(e) {
                        e.wrapS = t;
                      });
                    }
                  },
                  {
                    key: "wrapT",
                    get: function() {
                      return this._textures[0].wrapT;
                    },
                    set: function(t) {
                      this._textures.forEach(function(e) {
                        e.wrapT = t;
                      });
                    }
                  },
                  {
                    key: "numTargets",
                    get: function() {
                      return this._numTargets;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = f;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            i = !0;
          try {
            document.createEvent("CustomEvent");
          } catch (t) {
            i = !1;
          }
          var a = (function() {
            function t() {
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this._eventListeners = {});
            }
            return (
              r(t, [
                {
                  key: "addEventListener",
                  value: function(t, e) {
                    return (
                      (null !== this._eventListeners &&
                        void 0 !== this._eventListeners) ||
                        (this._eventListeners = {}),
                      this._eventListeners[t] || (this._eventListeners[t] = []),
                      this._eventListeners[t].push(e),
                      this
                    );
                  }
                },
                {
                  key: "on",
                  value: function(t, e) {
                    return this.addEventListener(t, e);
                  }
                },
                {
                  key: "removeEventListener",
                  value: function(t, e) {
                    (null !== this._eventListeners &&
                      void 0 !== this._eventListeners) ||
                      (this._eventListeners = {});
                    var n = this._eventListeners[t];
                    if (void 0 === n) return this;
                    for (var r = n.length, i = 0; i < r; i++)
                      n[i] === e && (n.splice(i, 1), i--, r--);
                    return this;
                  }
                },
                {
                  key: "off",
                  value: function(t, e) {
                    return this.removeEventListener(t, e);
                  }
                },
                {
                  key: "dispatchEvent",
                  value: function(t) {
                    (null !== this._eventListeners &&
                      void 0 !== this._eventListeners) ||
                      (this._eventListeners = {});
                    var e = t.type;
                    try {
                      null === t.target && (t.target = this),
                        (t.currentTarget = this);
                    } catch (r) {
                      var n = { type: e, detail: t.detail, dispatcher: this };
                      return this.dispatchEvent(n);
                    }
                    var r = this._eventListeners[e];
                    if (null != r)
                      for (
                        var i = this._copyArray(r), a = i.length, o = 0;
                        o < a;
                        o++
                      )
                        i[o].call(this, t);
                    return this;
                  }
                },
                {
                  key: "dispatchCustomEvent",
                  value: function(t, e) {
                    var n = void 0;
                    return (
                      i
                        ? (((n = document.createEvent(
                            "CustomEvent"
                          )).dispatcher = this),
                          n.initCustomEvent(t, !1, !1, e))
                        : (n = { type: t, detail: e, dispatcher: this }),
                      this.dispatchEvent(n)
                    );
                  }
                },
                {
                  key: "trigger",
                  value: function(t, e) {
                    return this.dispatchCustomEvent(t, e);
                  }
                },
                {
                  key: "_destroy",
                  value: function() {
                    if (null !== this._eventListeners) {
                      for (var t in this._eventListeners)
                        if (this._eventListeners.hasOwnProperty(t)) {
                          for (
                            var e = this._eventListeners[t],
                              n = e.length,
                              r = 0;
                            r < n;
                            r++
                          )
                            e[r] = null;
                          delete this._eventListeners[t];
                        }
                      this._eventListeners = null;
                    }
                  }
                },
                {
                  key: "_copyArray",
                  value: function(t) {
                    for (
                      var e = new Array(t.length), n = e.length, r = 0;
                      r < n;
                      r++
                    )
                      e[r] = t[r];
                    return e;
                  }
                }
              ]),
              t
            );
          })();
          e.default = a;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(10)),
            o = r(n(4)),
            s = n(2),
            u = function(t, e) {
              var n = e || {};
              return (
                t.touches
                  ? ((n.x = t.touches[0].pageX), (n.y = t.touches[0].pageY))
                  : ((n.x = t.clientX), (n.y = t.clientY)),
                n
              );
            },
            c = (function() {
              function t(e) {
                var n = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : window,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 500;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._target = e),
                  (this._listenerTarget = r),
                  (this._mouse = {}),
                  (this._preMouse = {}),
                  (this.center = s.vec3.create()),
                  (this._up = s.vec3.fromValues(0, 1, 0)),
                  (this.radius = new a.default(i)),
                  (this.position = s.vec3.fromValues(0, 0, this.radius.value)),
                  (this.positionOffset = s.vec3.create()),
                  (this._rx = new a.default(0)),
                  this._rx.limit(-Math.PI / 2, Math.PI / 2),
                  (this._ry = new a.default(0)),
                  (this._preRX = 0),
                  (this._preRY = 0),
                  (this._isLockZoom = !1),
                  (this._isLockRotation = !1),
                  (this._isInvert = !1),
                  (this.sensitivity = 1),
                  (this._wheelBind = function(t) {
                    return n._onWheel(t);
                  }),
                  (this._downBind = function(t) {
                    return n._onDown(t);
                  }),
                  (this._moveBind = function(t) {
                    return n._onMove(t);
                  }),
                  (this._upBind = function() {
                    return n._onUp();
                  }),
                  this.connect(),
                  o.default.addEF(function() {
                    return n._loop();
                  });
              }
              return (
                i(t, [
                  {
                    key: "connect",
                    value: function() {
                      this.disconnect(),
                        this._listenerTarget.addEventListener(
                          "mousewheel",
                          this._wheelBind
                        ),
                        this._listenerTarget.addEventListener(
                          "DOMMouseScroll",
                          this._wheelBind
                        ),
                        this._listenerTarget.addEventListener(
                          "mousedown",
                          this._downBind
                        ),
                        this._listenerTarget.addEventListener(
                          "touchstart",
                          this._downBind
                        ),
                        this._listenerTarget.addEventListener(
                          "mousemove",
                          this._moveBind
                        ),
                        this._listenerTarget.addEventListener(
                          "touchmove",
                          this._moveBind
                        ),
                        window.addEventListener("touchend", this._upBind),
                        window.addEventListener("mouseup", this._upBind);
                    }
                  },
                  {
                    key: "disconnect",
                    value: function() {
                      this._listenerTarget.removeEventListener(
                        "mousewheel",
                        this._wheelBind
                      ),
                        this._listenerTarget.removeEventListener(
                          "DOMMouseScroll",
                          this._wheelBind
                        ),
                        this._listenerTarget.removeEventListener(
                          "mousedown",
                          this._downBind
                        ),
                        this._listenerTarget.removeEventListener(
                          "touchstart",
                          this._downBind
                        ),
                        this._listenerTarget.removeEventListener(
                          "mousemove",
                          this._moveBind
                        ),
                        this._listenerTarget.removeEventListener(
                          "touchmove",
                          this._moveBind
                        ),
                        window.removeEventListener("touchend", this._upBind),
                        window.removeEventListener("mouseup", this._upBind);
                    }
                  },
                  {
                    key: "lock",
                    value: function() {
                      var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      (this._isLockZoom = t),
                        (this._isLockRotation = t),
                        (this._isMouseDown = !1);
                    }
                  },
                  {
                    key: "lockZoom",
                    value: function() {
                      var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      this._isLockZoom = t;
                    }
                  },
                  {
                    key: "lockRotation",
                    value: function() {
                      var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      this._isLockRotation = t;
                    }
                  },
                  {
                    key: "inverseControl",
                    value: function() {
                      var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      this._isInvert = t;
                    }
                  },
                  {
                    key: "_onDown",
                    value: function(t) {
                      this._isLockRotation ||
                        ((this._isMouseDown = !0),
                        u(t, this._mouse),
                        u(t, this._preMouse),
                        (this._preRX = this._rx.targetValue),
                        (this._preRY = this._ry.targetValue));
                    }
                  },
                  {
                    key: "_onMove",
                    value: function(t) {
                      if (
                        !this._isLockRotation &&
                        (u(t, this._mouse),
                        t.touches && t.preventDefault(),
                        this._isMouseDown)
                      ) {
                        var e = -(this._mouse.x - this._preMouse.x);
                        this._isInvert && (e *= -1),
                          (this._ry.value =
                            this._preRY - 0.01 * e * this.sensitivity);
                        var n = -(this._mouse.y - this._preMouse.y);
                        this._isInvert && (n *= -1),
                          (this._rx.value =
                            this._preRX - 0.01 * n * this.sensitivity);
                      }
                    }
                  },
                  {
                    key: "_onUp",
                    value: function() {
                      this._isLockRotation || (this._isMouseDown = !1);
                    }
                  },
                  {
                    key: "_onWheel",
                    value: function(t) {
                      if (!this._isLockZoom) {
                        var e,
                          n = t.wheelDelta,
                          r = t.detail;
                        (e = r
                          ? n
                            ? (n / r / 40) * r > 0
                              ? 1
                              : -1
                            : -r / 3
                          : n / 120),
                          this.radius.add(2 * -e);
                      }
                    }
                  },
                  {
                    key: "_loop",
                    value: function() {
                      this._updatePosition(),
                        this._target && this._updateCamera();
                    }
                  },
                  {
                    key: "_updatePosition",
                    value: function() {
                      this.position[1] =
                        Math.sin(this._rx.value) * this.radius.value;
                      var t = Math.cos(this._rx.value) * this.radius.value;
                      (this.position[0] =
                        Math.cos(this._ry.value + 0.5 * Math.PI) * t),
                        (this.position[2] =
                          Math.sin(this._ry.value + 0.5 * Math.PI) * t),
                        s.vec3.add(
                          this.position,
                          this.position,
                          this.positionOffset
                        );
                    }
                  },
                  {
                    key: "_updateCamera",
                    value: function() {
                      this._target.lookAt(this.position, this.center, this._up);
                    }
                  },
                  {
                    key: "rx",
                    get: function() {
                      return this._rx;
                    }
                  },
                  {
                    key: "ry",
                    get: function() {
                      return this._ry;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = c;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(12),
            o = (r = a) && r.__esModule ? r : { default: r },
            s = n(2),
            u = (function(t) {
              function e() {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var t = (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                  ),
                  n = s.vec3.clone([0, 0, 5]),
                  r = s.vec3.create(),
                  i = s.vec3.clone([0, 1, 0]);
                return t.lookAt(n, r, i), t.ortho(-1, 1, 1, -1), t;
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "setBoundary",
                    value: function(t, e, n, r) {
                      var i =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : 0.1,
                        a =
                          arguments.length > 5 && void 0 !== arguments[5]
                            ? arguments[5]
                            : 100;
                      this.ortho(t, e, n, r, i, a);
                    }
                  },
                  {
                    key: "ortho",
                    value: function(t, e, n, r) {
                      var i =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : 0.1,
                        a =
                          arguments.length > 5 && void 0 !== arguments[5]
                            ? arguments[5]
                            : 100;
                      (this.left = t),
                        (this.right = e),
                        (this.top = n),
                        (this.bottom = r),
                        mat4.ortho(this._projection, t, e, r, n, i, a);
                    }
                  }
                ]),
                e
              );
            })(o.default);
          e.default = u;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(2),
            o = n(4),
            s = (r = o) && r.__esModule ? r : { default: r },
            u = (function() {
              function t() {
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._needUpdate = !0),
                  (this._x = 0),
                  (this._y = 0),
                  (this._z = 0),
                  (this._sx = 1),
                  (this._sy = 1),
                  (this._sz = 1),
                  (this._rx = 0),
                  (this._ry = 0),
                  (this._rz = 0),
                  (this._position = a.vec3.create()),
                  (this._scale = a.vec3.fromValues(1, 1, 1)),
                  (this._rotation = a.vec3.create()),
                  (this._matrix = a.mat4.create()),
                  (this._matrixParent = a.mat4.create()),
                  (this._matrixRotation = a.mat4.create()),
                  (this._matrixScale = a.mat4.create()),
                  (this._matrixTranslation = a.mat4.create()),
                  (this._matrixQuaternion = a.mat4.create()),
                  (this._quat = a.quat.create()),
                  (this._children = []);
              }
              return (
                i(t, [
                  {
                    key: "addChild",
                    value: function(t) {
                      this._children.push(t);
                    }
                  },
                  {
                    key: "removeChild",
                    value: function(t) {
                      var e = this._children.indexOf(t);
                      -1 != e
                        ? this._children.splice(e, 1)
                        : console.warn("Child no exist");
                    }
                  },
                  {
                    key: "_update",
                    value: function() {
                      this._needUpdate &&
                        (a.vec3.set(this._scale, this._sx, this._sy, this._sz),
                        a.vec3.set(
                          this._rotation,
                          this._rx,
                          this._ry,
                          this._rz
                        ),
                        a.vec3.set(this._position, this._x, this._y, this._z),
                        a.mat4.identity(
                          this._matrixTranslation,
                          this._matrixTranslation
                        ),
                        a.mat4.identity(this._matrixScale, this._matrixScale),
                        a.mat4.identity(
                          this._matrixRotation,
                          this._matrixRotation
                        ),
                        a.mat4.rotateX(
                          this._matrixRotation,
                          this._matrixRotation,
                          this._rx
                        ),
                        a.mat4.rotateY(
                          this._matrixRotation,
                          this._matrixRotation,
                          this._ry
                        ),
                        a.mat4.rotateZ(
                          this._matrixRotation,
                          this._matrixRotation,
                          this._rz
                        ),
                        a.mat4.fromQuat(this._matrixQuaternion, this._quat),
                        a.mat4.mul(
                          this._matrixRotation,
                          this._matrixQuaternion,
                          this._matrixRotation
                        ),
                        a.mat4.scale(
                          this._matrixScale,
                          this._matrixScale,
                          this._scale
                        ),
                        a.mat4.translate(
                          this._matrixTranslation,
                          this._matrixTranslation,
                          this._position
                        ),
                        a.mat4.mul(
                          this._matrix,
                          this._matrixTranslation,
                          this._matrixRotation
                        ),
                        a.mat4.mul(
                          this._matrix,
                          this._matrix,
                          this._matrixScale
                        ),
                        a.mat4.mul(
                          this._matrix,
                          this._matrixParent,
                          this._matrix
                        ),
                        this.updateMatrix(),
                        (this._needUpdate = !1));
                    }
                  },
                  {
                    key: "updateMatrix",
                    value: function(t) {
                      var e = this;
                      t &&
                        ((this._needUpdate = !0),
                        a.mat4.copy(this._matrixParent, t)),
                        this._needUpdate &&
                          this._children.forEach(function(t) {
                            t.updateMatrix(e._matrix);
                          });
                    }
                  },
                  {
                    key: "setRotationFromQuaternion",
                    value: function(t) {
                      var e = this;
                      a.quat.copy(this._quat, t),
                        (this._needUpdate = !0),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "matrix",
                    get: function() {
                      return this._needUpdate && this._update(), this._matrix;
                    }
                  },
                  {
                    key: "x",
                    get: function() {
                      return this._x;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._x = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "y",
                    get: function() {
                      return this._y;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._y = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "z",
                    get: function() {
                      return this._z;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._z = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "scaleX",
                    get: function() {
                      return this._sx;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._sx = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "scaleY",
                    get: function() {
                      return this._sy;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._sy = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "scaleZ",
                    get: function() {
                      return this._sz;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._sz = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "rotationX",
                    get: function() {
                      return this._rx;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._rx = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "rotationY",
                    get: function() {
                      return this._ry;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._ry = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "rotationZ",
                    get: function() {
                      return this._rz;
                    },
                    set: function(t) {
                      var e = this;
                      (this._needUpdate = !0),
                        (this._rz = t),
                        s.default.next(function() {
                          return e._update();
                        });
                    }
                  },
                  {
                    key: "children",
                    get: function() {
                      return this._children;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = u;
        },
        function(t, e) {
          t.exports =
            "// generalWithNormal.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tvec3 pos      = aVertexPosition * scale;\n\tpos           += position;\n\tgl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\t\n\tvTextureCoord = aTextureCoord;\n\tvNormal       = normalize(uNormalMatrix * aNormal);\n}";
        },
        function(t, e) {
          t.exports =
            "// basic.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n\tgl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n\tvTextureCoord = aTextureCoord;\n\t\n\tvVertex = aVertexPosition;\n\tvNormal = aNormal;\n}";
        },
        function(t, e) {
          t.exports =
            "// basic.frag\n\n#define SHADER_NAME SKYBOX_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\nuniform samplerCube texture;\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture, vVertex);\n}";
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(28),
            o = (r = a) && r.__esModule ? r : { default: r },
            s = (function() {
              function t(e, n, r) {
                var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  a =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 1;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._fbos = []);
                for (var s = 0; s < e; s++) {
                  var u = new o.default(n, r, i, a);
                  this._fbos.push(u);
                }
              }
              return (
                i(t, [
                  {
                    key: "swap",
                    value: function() {
                      var t = this._fbos.shift();
                      this._fbos.push(t);
                    }
                  },
                  {
                    key: "read",
                    get: function() {
                      return this._fbos[this._fbos.length - 1];
                    }
                  },
                  {
                    key: "write",
                    get: function() {
                      return this._fbos[0];
                    }
                  },
                  {
                    key: "all",
                    get: function() {
                      return this._fbos;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = s;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.FboPingPong = e.FboArray = e.ShaderLibs = e.Draw = e.View3D = e.View = e.Scene = e.BatchFXAA = e.BatchSky = e.BatchSkybox = e.BatchLine = e.BatchDotsPlane = e.BatchBall = e.BatchAxis = e.BatchCopy = e.GLTFParser = e.HDRLoader = e.ObjLoader = e.BinaryLoader = e.Object3D = e.Ray = e.CameraCube = e.CameraPerspective = e.CameraOrtho = e.Camera = e.TouchDetector = e.QuatRotation = e.WebglNumber = e.OrbitalControl = e.TweenNumber = e.SpringNumber = e.EaseNumber = e.EventDispatcher = e.Scheduler = e.TransformFeedbackObject = e.MultisampleFrameBuffer = e.CubeFrameBuffer = e.FrameBuffer = e.Batch = e.Geom = e.Mesh = e.GLCubeTexture = e.GLTextureOld = e.GLTexture = e.GLShader = e.GL = void 0);
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(2)),
            o = r(n(0)),
            s = r(n(1)),
            u = r(n(25)),
            c = r(n(26)),
            l = r(n(27)),
            h = r(n(5)),
            f = r(n(7)),
            d = r(n(6)),
            _ = r(n(28)),
            p = r(n(51)),
            v = r(n(52)),
            E = r(n(53)),
            m = r(n(4)),
            T = r(n(29)),
            b = r(n(10)),
            g = r(n(54)),
            y = r(n(55)),
            R = r(n(30)),
            M = r(n(56)),
            A = r(n(57)),
            x = r(n(8)),
            w = (r(n(23)), n(12)),
            P = r(w),
            O = r(n(31)),
            L = r(n(13)),
            S = r(n(59)),
            I = r(n(11)),
            N = r(n(32)),
            C = r(n(14)),
            F = r(n(60)),
            U = r(n(61)),
            D = r(n(63)),
            B = r(n(64)),
            k = r(n(65)),
            V = r(n(68)),
            X = r(n(69)),
            j = r(n(72)),
            G = r(n(73)),
            H = r(n(74)),
            Y = r(n(76)),
            q = r(n(78)),
            z = r(n(79)),
            W = r(n(80)),
            K = r(n(81)),
            Z = r(n(82)),
            Q = r(n(36)),
            $ = r(n(83)),
            J = new ((function() {
              function t() {
                for (var e in ((function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                (this.glm = a),
                (this.GL = o.default),
                (this.GLTool = o.default),
                (this.GLShader = s.default),
                (this.GLTexture = c.default),
                (this.GLTextureOld = u.default),
                (this.GLCubeTexture = l.default),
                (this.Mesh = h.default),
                (this.Geom = f.default),
                (this.Batch = d.default),
                (this.FrameBuffer = _.default),
                (this.CubeFrameBuffer = p.default),
                (this.Scheduler = m.default),
                (this.EventDispatcher = T.default),
                (this.EaseNumber = b.default),
                (this.SpringNumber = g.default),
                (this.TweenNumber = y.default),
                (this.Camera = P.default),
                (this.CameraOrtho = O.default),
                (this.CameraPerspective = L.default),
                (this.Ray = I.default),
                (this.CameraCube = S.default),
                (this.OrbitalControl = R.default),
                (this.QuatRotation = M.default),
                (this.BinaryLoader = C.default),
                (this.ObjLoader = F.default),
                (this.GLTFParser = D.default),
                (this.HDRLoader = U.default),
                (this.BatchCopy = B.default),
                (this.BatchAxis = k.default),
                (this.BatchBall = V.default),
                (this.BatchBall = V.default),
                (this.BatchLine = j.default),
                (this.BatchSkybox = G.default),
                (this.BatchSky = H.default),
                (this.BatchFXAA = Y.default),
                (this.BatchDotsPlane = X.default),
                (this.Scene = q.default),
                (this.View = z.default),
                (this.View3D = W.default),
                (this.Draw = K.default),
                (this.Object3D = N.default),
                (this.ShaderLibs = Z.default),
                (this.WebglNumber = x.default),
                (this.FboArray = Q.default),
                (this.FboPingPong = $.default),
                (this.MultisampleFrameBuffer = v.default),
                (this.TransformFeedbackObject = E.default),
                a))
                  a[e] && (window[e] = a[e]);
              }
              return (
                i(t, [
                  {
                    key: "log",
                    value: function() {
                      for (var t in (navigator.userAgent.indexOf("Chrome") > -1
                        ? console.log(
                            "%clib alfrid : VERSION 0.3.6",
                            "background: #193441; color: #FCFFF5"
                          )
                        : console.log("lib alfrid : VERSION ", "0.3.6"),
                      console.log("%cClasses : ", "color: #193441"),
                      this))
                        this[t] && console.log("%c - " + t, "color: #3E606F");
                    }
                  }
                ]),
                t
              );
            })())();
          (e.default = J),
            (e.GL = o.default),
            (e.GLShader = s.default),
            (e.GLTexture = c.default),
            (e.GLTextureOld = u.default),
            (e.GLCubeTexture = l.default),
            (e.Mesh = h.default),
            (e.Geom = f.default),
            (e.Batch = d.default),
            (e.FrameBuffer = _.default),
            (e.CubeFrameBuffer = p.default),
            (e.MultisampleFrameBuffer = v.default),
            (e.TransformFeedbackObject = E.default),
            (e.Scheduler = m.default),
            (e.EventDispatcher = T.default),
            (e.EaseNumber = b.default),
            (e.SpringNumber = g.default),
            (e.TweenNumber = y.default),
            (e.OrbitalControl = R.default),
            (e.WebglNumber = x.default),
            (e.QuatRotation = M.default),
            (e.TouchDetector = A.default),
            (e.Camera = P.default),
            (e.CameraOrtho = O.default),
            (e.CameraPerspective = L.default),
            (e.CameraCube = S.default),
            (e.Ray = I.default),
            (e.Object3D = N.default),
            (e.BinaryLoader = C.default),
            (e.ObjLoader = F.default),
            (e.HDRLoader = U.default),
            (e.GLTFParser = D.default),
            (e.BatchCopy = B.default),
            (e.BatchAxis = k.default),
            (e.BatchBall = V.default),
            (e.BatchDotsPlane = X.default),
            (e.BatchLine = j.default),
            (e.BatchSkybox = G.default),
            (e.BatchSky = H.default),
            (e.BatchFXAA = Y.default),
            (e.Scene = q.default),
            (e.View = z.default),
            (e.View3D = W.default),
            (e.Draw = K.default),
            (e.ShaderLibs = Z.default),
            (e.FboArray = Q.default),
            (e.FboPingPong = $.default);
        },
        function(t, e, n) {
          "use strict";
          function r(t, e, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[3],
              s = n[0],
              u = n[1],
              c = n[2],
              l = n[3];
            return (
              (t[0] = r * s + a * u),
              (t[1] = i * s + o * u),
              (t[2] = r * c + a * l),
              (t[3] = i * c + o * l),
              t
            );
          }
          function i(t, e, n) {
            return (
              (t[0] = e[0] - n[0]),
              (t[1] = e[1] - n[1]),
              (t[2] = e[2] - n[2]),
              (t[3] = e[3] - n[3]),
              t
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.sub = e.mul = void 0),
            (e.create = function() {
              var t = new a.ARRAY_TYPE(4);
              return (
                a.ARRAY_TYPE != Float32Array && ((t[1] = 0), (t[2] = 0)),
                (t[0] = 1),
                (t[3] = 1),
                t
              );
            }),
            (e.clone = function(t) {
              var e = new a.ARRAY_TYPE(4);
              return (
                (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e
              );
            }),
            (e.copy = function(t, e) {
              return (
                (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t
              );
            }),
            (e.identity = function(t) {
              return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
            }),
            (e.fromValues = function(t, e, n, r) {
              var i = new a.ARRAY_TYPE(4);
              return (i[0] = t), (i[1] = e), (i[2] = n), (i[3] = r), i;
            }),
            (e.set = function(t, e, n, r, i) {
              return (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i), t;
            }),
            (e.transpose = function(t, e) {
              if (t === e) {
                var n = e[1];
                (t[1] = e[2]), (t[2] = n);
              } else (t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]);
              return t;
            }),
            (e.invert = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = n * a - i * r;
              return o
                ? ((o = 1 / o),
                  (t[0] = a * o),
                  (t[1] = -r * o),
                  (t[2] = -i * o),
                  (t[3] = n * o),
                  t)
                : null;
            }),
            (e.adjoint = function(t, e) {
              var n = e[0];
              return (
                (t[0] = e[3]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = n), t
              );
            }),
            (e.determinant = function(t) {
              return t[0] * t[3] - t[2] * t[1];
            }),
            (e.multiply = r),
            (e.rotate = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = Math.sin(n),
                u = Math.cos(n);
              return (
                (t[0] = r * u + a * s),
                (t[1] = i * u + o * s),
                (t[2] = r * -s + a * u),
                (t[3] = i * -s + o * u),
                t
              );
            }),
            (e.scale = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = n[0],
                u = n[1];
              return (
                (t[0] = r * s),
                (t[1] = i * s),
                (t[2] = a * u),
                (t[3] = o * u),
                t
              );
            }),
            (e.fromRotation = function(t, e) {
              var n = Math.sin(e),
                r = Math.cos(e);
              return (t[0] = r), (t[1] = n), (t[2] = -n), (t[3] = r), t;
            }),
            (e.fromScaling = function(t, e) {
              return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = e[1]), t;
            }),
            (e.str = function(t) {
              return (
                "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
              );
            }),
            (e.frob = function(t) {
              return Math.sqrt(
                Math.pow(t[0], 2) +
                  Math.pow(t[1], 2) +
                  Math.pow(t[2], 2) +
                  Math.pow(t[3], 2)
              );
            }),
            (e.LDU = function(t, e, n, r) {
              return (
                (t[2] = r[2] / r[0]),
                (n[0] = r[0]),
                (n[1] = r[1]),
                (n[3] = r[3] - t[2] * n[1]),
                [t, e, n]
              );
            }),
            (e.add = function(t, e, n) {
              return (
                (t[0] = e[0] + n[0]),
                (t[1] = e[1] + n[1]),
                (t[2] = e[2] + n[2]),
                (t[3] = e[3] + n[3]),
                t
              );
            }),
            (e.subtract = i),
            (e.exactEquals = function(t, e) {
              return (
                t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
              );
            }),
            (e.equals = function(t, e) {
              var n = t[0],
                r = t[1],
                i = t[2],
                o = t[3],
                s = e[0],
                u = e[1],
                c = e[2],
                l = e[3];
              return (
                Math.abs(n - s) <=
                  a.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) &&
                Math.abs(r - u) <=
                  a.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) &&
                Math.abs(i - c) <=
                  a.EPSILON * Math.max(1, Math.abs(i), Math.abs(c)) &&
                Math.abs(o - l) <=
                  a.EPSILON * Math.max(1, Math.abs(o), Math.abs(l))
              );
            }),
            (e.multiplyScalar = function(t, e, n) {
              return (
                (t[0] = e[0] * n),
                (t[1] = e[1] * n),
                (t[2] = e[2] * n),
                (t[3] = e[3] * n),
                t
              );
            }),
            (e.multiplyScalarAndAdd = function(t, e, n, r) {
              return (
                (t[0] = e[0] + n[0] * r),
                (t[1] = e[1] + n[1] * r),
                (t[2] = e[2] + n[2] * r),
                (t[3] = e[3] + n[3] * r),
                t
              );
            });
          var a = (function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          })(n(3));
          (e.mul = r), (e.sub = i);
        },
        function(t, e, n) {
          "use strict";
          function r(t, e, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[3],
              s = e[4],
              u = e[5],
              c = n[0],
              l = n[1],
              h = n[2],
              f = n[3],
              d = n[4],
              _ = n[5];
            return (
              (t[0] = r * c + a * l),
              (t[1] = i * c + o * l),
              (t[2] = r * h + a * f),
              (t[3] = i * h + o * f),
              (t[4] = r * d + a * _ + s),
              (t[5] = i * d + o * _ + u),
              t
            );
          }
          function i(t, e, n) {
            return (
              (t[0] = e[0] - n[0]),
              (t[1] = e[1] - n[1]),
              (t[2] = e[2] - n[2]),
              (t[3] = e[3] - n[3]),
              (t[4] = e[4] - n[4]),
              (t[5] = e[5] - n[5]),
              t
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.sub = e.mul = void 0),
            (e.create = function() {
              var t = new a.ARRAY_TYPE(6);
              return (
                a.ARRAY_TYPE != Float32Array &&
                  ((t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0)),
                (t[0] = 1),
                (t[3] = 1),
                t
              );
            }),
            (e.clone = function(t) {
              var e = new a.ARRAY_TYPE(6);
              return (
                (e[0] = t[0]),
                (e[1] = t[1]),
                (e[2] = t[2]),
                (e[3] = t[3]),
                (e[4] = t[4]),
                (e[5] = t[5]),
                e
              );
            }),
            (e.copy = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[3]),
                (t[4] = e[4]),
                (t[5] = e[5]),
                t
              );
            }),
            (e.identity = function(t) {
              return (
                (t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 1),
                (t[4] = 0),
                (t[5] = 0),
                t
              );
            }),
            (e.fromValues = function(t, e, n, r, i, o) {
              var s = new a.ARRAY_TYPE(6);
              return (
                (s[0] = t),
                (s[1] = e),
                (s[2] = n),
                (s[3] = r),
                (s[4] = i),
                (s[5] = o),
                s
              );
            }),
            (e.set = function(t, e, n, r, i, a, o) {
              return (
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = i),
                (t[4] = a),
                (t[5] = o),
                t
              );
            }),
            (e.invert = function(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = e[3],
                o = e[4],
                s = e[5],
                u = n * a - r * i;
              return u
                ? ((u = 1 / u),
                  (t[0] = a * u),
                  (t[1] = -r * u),
                  (t[2] = -i * u),
                  (t[3] = n * u),
                  (t[4] = (i * s - a * o) * u),
                  (t[5] = (r * o - n * s) * u),
                  t)
                : null;
            }),
            (e.determinant = function(t) {
              return t[0] * t[3] - t[1] * t[2];
            }),
            (e.multiply = r),
            (e.rotate = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = e[4],
                u = e[5],
                c = Math.sin(n),
                l = Math.cos(n);
              return (
                (t[0] = r * l + a * c),
                (t[1] = i * l + o * c),
                (t[2] = r * -c + a * l),
                (t[3] = i * -c + o * l),
                (t[4] = s),
                (t[5] = u),
                t
              );
            }),
            (e.scale = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = e[4],
                u = e[5],
                c = n[0],
                l = n[1];
              return (
                (t[0] = r * c),
                (t[1] = i * c),
                (t[2] = a * l),
                (t[3] = o * l),
                (t[4] = s),
                (t[5] = u),
                t
              );
            }),
            (e.translate = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = e[4],
                u = e[5],
                c = n[0],
                l = n[1];
              return (
                (t[0] = r),
                (t[1] = i),
                (t[2] = a),
                (t[3] = o),
                (t[4] = r * c + a * l + s),
                (t[5] = i * c + o * l + u),
                t
              );
            }),
            (e.fromRotation = function(t, e) {
              var n = Math.sin(e),
                r = Math.cos(e);
              return (
                (t[0] = r),
                (t[1] = n),
                (t[2] = -n),
                (t[3] = r),
                (t[4] = 0),
                (t[5] = 0),
                t
              );
            }),
            (e.fromScaling = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = e[1]),
                (t[4] = 0),
                (t[5] = 0),
                t
              );
            }),
            (e.fromTranslation = function(t, e) {
              return (
                (t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 1),
                (t[4] = e[0]),
                (t[5] = e[1]),
                t
              );
            }),
            (e.str = function(t) {
              return (
                "mat2d(" +
                t[0] +
                ", " +
                t[1] +
                ", " +
                t[2] +
                ", " +
                t[3] +
                ", " +
                t[4] +
                ", " +
                t[5] +
                ")"
              );
            }),
            (e.frob = function(t) {
              return Math.sqrt(
                Math.pow(t[0], 2) +
                  Math.pow(t[1], 2) +
                  Math.pow(t[2], 2) +
                  Math.pow(t[3], 2) +
                  Math.pow(t[4], 2) +
                  Math.pow(t[5], 2) +
                  1
              );
            }),
            (e.add = function(t, e, n) {
              return (
                (t[0] = e[0] + n[0]),
                (t[1] = e[1] + n[1]),
                (t[2] = e[2] + n[2]),
                (t[3] = e[3] + n[3]),
                (t[4] = e[4] + n[4]),
                (t[5] = e[5] + n[5]),
                t
              );
            }),
            (e.subtract = i),
            (e.multiplyScalar = function(t, e, n) {
              return (
                (t[0] = e[0] * n),
                (t[1] = e[1] * n),
                (t[2] = e[2] * n),
                (t[3] = e[3] * n),
                (t[4] = e[4] * n),
                (t[5] = e[5] * n),
                t
              );
            }),
            (e.multiplyScalarAndAdd = function(t, e, n, r) {
              return (
                (t[0] = e[0] + n[0] * r),
                (t[1] = e[1] + n[1] * r),
                (t[2] = e[2] + n[2] * r),
                (t[3] = e[3] + n[3] * r),
                (t[4] = e[4] + n[4] * r),
                (t[5] = e[5] + n[5] * r),
                t
              );
            }),
            (e.exactEquals = function(t, e) {
              return (
                t[0] === e[0] &&
                t[1] === e[1] &&
                t[2] === e[2] &&
                t[3] === e[3] &&
                t[4] === e[4] &&
                t[5] === e[5]
              );
            }),
            (e.equals = function(t, e) {
              var n = t[0],
                r = t[1],
                i = t[2],
                o = t[3],
                s = t[4],
                u = t[5],
                c = e[0],
                l = e[1],
                h = e[2],
                f = e[3],
                d = e[4],
                _ = e[5];
              return (
                Math.abs(n - c) <=
                  a.EPSILON * Math.max(1, Math.abs(n), Math.abs(c)) &&
                Math.abs(r - l) <=
                  a.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) &&
                Math.abs(i - h) <=
                  a.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) &&
                Math.abs(o - f) <=
                  a.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) &&
                Math.abs(s - d) <=
                  a.EPSILON * Math.max(1, Math.abs(s), Math.abs(d)) &&
                Math.abs(u - _) <=
                  a.EPSILON * Math.max(1, Math.abs(u), Math.abs(_))
              );
            });
          var a = (function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          })(n(3));
          (e.mul = r), (e.sub = i);
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          }
          function i(t, e, n) {
            var r = 0.5 * n[0],
              i = 0.5 * n[1],
              a = 0.5 * n[2],
              o = e[0],
              s = e[1],
              u = e[2],
              c = e[3];
            return (
              (t[0] = o),
              (t[1] = s),
              (t[2] = u),
              (t[3] = c),
              (t[4] = r * c + i * u - a * s),
              (t[5] = i * c + a * o - r * u),
              (t[6] = a * c + r * s - i * o),
              (t[7] = -r * o - i * s - a * u),
              t
            );
          }
          function a(t, e) {
            return (
              (t[0] = e[0]),
              (t[1] = e[1]),
              (t[2] = e[2]),
              (t[3] = e[3]),
              (t[4] = e[4]),
              (t[5] = e[5]),
              (t[6] = e[6]),
              (t[7] = e[7]),
              t
            );
          }
          function o(t, e, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[3],
              s = n[4],
              u = n[5],
              c = n[6],
              l = n[7],
              h = e[4],
              f = e[5],
              d = e[6],
              _ = e[7],
              p = n[0],
              v = n[1],
              E = n[2],
              m = n[3];
            return (
              (t[0] = r * m + o * p + i * E - a * v),
              (t[1] = i * m + o * v + a * p - r * E),
              (t[2] = a * m + o * E + r * v - i * p),
              (t[3] = o * m - r * p - i * v - a * E),
              (t[4] =
                r * l + o * s + i * c - a * u + h * m + _ * p + f * E - d * v),
              (t[5] =
                i * l + o * u + a * s - r * c + f * m + _ * v + d * p - h * E),
              (t[6] =
                a * l + o * c + r * u - i * s + d * m + _ * E + h * v - f * p),
              (t[7] =
                o * l - r * s - i * u - a * c + _ * m - h * p - f * v - d * E),
              t
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.sqrLen = e.squaredLength = e.len = e.length = e.dot = e.mul = e.setReal = e.getReal = void 0),
            (e.create = function() {
              var t = new s.ARRAY_TYPE(8);
              return (
                s.ARRAY_TYPE != Float32Array &&
                  ((t[0] = 0),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[4] = 0),
                  (t[5] = 0),
                  (t[6] = 0),
                  (t[7] = 0)),
                (t[3] = 1),
                t
              );
            }),
            (e.clone = function(t) {
              var e = new s.ARRAY_TYPE(8);
              return (
                (e[0] = t[0]),
                (e[1] = t[1]),
                (e[2] = t[2]),
                (e[3] = t[3]),
                (e[4] = t[4]),
                (e[5] = t[5]),
                (e[6] = t[6]),
                (e[7] = t[7]),
                e
              );
            }),
            (e.fromValues = function(t, e, n, r, i, a, o, u) {
              var c = new s.ARRAY_TYPE(8);
              return (
                (c[0] = t),
                (c[1] = e),
                (c[2] = n),
                (c[3] = r),
                (c[4] = i),
                (c[5] = a),
                (c[6] = o),
                (c[7] = u),
                c
              );
            }),
            (e.fromRotationTranslationValues = function(t, e, n, r, i, a, o) {
              var u = new s.ARRAY_TYPE(8);
              (u[0] = t), (u[1] = e), (u[2] = n), (u[3] = r);
              var c = 0.5 * i,
                l = 0.5 * a,
                h = 0.5 * o;
              return (
                (u[4] = c * r + l * n - h * e),
                (u[5] = l * r + h * t - c * n),
                (u[6] = h * r + c * e - l * t),
                (u[7] = -c * t - l * e - h * n),
                u
              );
            }),
            (e.fromRotationTranslation = i),
            (e.fromTranslation = function(t, e) {
              return (
                (t[0] = 0),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 1),
                (t[4] = 0.5 * e[0]),
                (t[5] = 0.5 * e[1]),
                (t[6] = 0.5 * e[2]),
                (t[7] = 0),
                t
              );
            }),
            (e.fromRotation = function(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[3]),
                (t[4] = 0),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                t
              );
            }),
            (e.fromMat4 = function(t, e) {
              var n = u.create();
              c.getRotation(n, e);
              var r = new s.ARRAY_TYPE(3);
              return c.getTranslation(r, e), i(t, n, r), t;
            }),
            (e.copy = a),
            (e.identity = function(t) {
              return (
                (t[0] = 0),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 1),
                (t[4] = 0),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                t
              );
            }),
            (e.set = function(t, e, n, r, i, a, o, s, u) {
              return (
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = i),
                (t[4] = a),
                (t[5] = o),
                (t[6] = s),
                (t[7] = u),
                t
              );
            }),
            (e.getDual = function(t, e) {
              return (
                (t[0] = e[4]), (t[1] = e[5]), (t[2] = e[6]), (t[3] = e[7]), t
              );
            }),
            (e.setDual = function(t, e) {
              return (
                (t[4] = e[0]), (t[5] = e[1]), (t[6] = e[2]), (t[7] = e[3]), t
              );
            }),
            (e.getTranslation = function(t, e) {
              var n = e[4],
                r = e[5],
                i = e[6],
                a = e[7],
                o = -e[0],
                s = -e[1],
                u = -e[2],
                c = e[3];
              return (
                (t[0] = 2 * (n * c + a * o + r * u - i * s)),
                (t[1] = 2 * (r * c + a * s + i * o - n * u)),
                (t[2] = 2 * (i * c + a * u + n * s - r * o)),
                t
              );
            }),
            (e.translate = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = 0.5 * n[0],
                u = 0.5 * n[1],
                c = 0.5 * n[2],
                l = e[4],
                h = e[5],
                f = e[6],
                d = e[7];
              return (
                (t[0] = r),
                (t[1] = i),
                (t[2] = a),
                (t[3] = o),
                (t[4] = o * s + i * c - a * u + l),
                (t[5] = o * u + a * s - r * c + h),
                (t[6] = o * c + r * u - i * s + f),
                (t[7] = -r * s - i * u - a * c + d),
                t
              );
            }),
            (e.rotateX = function(t, e, n) {
              var r = -e[0],
                i = -e[1],
                a = -e[2],
                o = e[3],
                s = e[4],
                c = e[5],
                l = e[6],
                h = e[7],
                f = s * o + h * r + c * a - l * i,
                d = c * o + h * i + l * r - s * a,
                _ = l * o + h * a + s * i - c * r,
                p = h * o - s * r - c * i - l * a;
              return (
                u.rotateX(t, e, n),
                (r = t[0]),
                (i = t[1]),
                (a = t[2]),
                (o = t[3]),
                (t[4] = f * o + p * r + d * a - _ * i),
                (t[5] = d * o + p * i + _ * r - f * a),
                (t[6] = _ * o + p * a + f * i - d * r),
                (t[7] = p * o - f * r - d * i - _ * a),
                t
              );
            }),
            (e.rotateY = function(t, e, n) {
              var r = -e[0],
                i = -e[1],
                a = -e[2],
                o = e[3],
                s = e[4],
                c = e[5],
                l = e[6],
                h = e[7],
                f = s * o + h * r + c * a - l * i,
                d = c * o + h * i + l * r - s * a,
                _ = l * o + h * a + s * i - c * r,
                p = h * o - s * r - c * i - l * a;
              return (
                u.rotateY(t, e, n),
                (r = t[0]),
                (i = t[1]),
                (a = t[2]),
                (o = t[3]),
                (t[4] = f * o + p * r + d * a - _ * i),
                (t[5] = d * o + p * i + _ * r - f * a),
                (t[6] = _ * o + p * a + f * i - d * r),
                (t[7] = p * o - f * r - d * i - _ * a),
                t
              );
            }),
            (e.rotateZ = function(t, e, n) {
              var r = -e[0],
                i = -e[1],
                a = -e[2],
                o = e[3],
                s = e[4],
                c = e[5],
                l = e[6],
                h = e[7],
                f = s * o + h * r + c * a - l * i,
                d = c * o + h * i + l * r - s * a,
                _ = l * o + h * a + s * i - c * r,
                p = h * o - s * r - c * i - l * a;
              return (
                u.rotateZ(t, e, n),
                (r = t[0]),
                (i = t[1]),
                (a = t[2]),
                (o = t[3]),
                (t[4] = f * o + p * r + d * a - _ * i),
                (t[5] = d * o + p * i + _ * r - f * a),
                (t[6] = _ * o + p * a + f * i - d * r),
                (t[7] = p * o - f * r - d * i - _ * a),
                t
              );
            }),
            (e.rotateByQuatAppend = function(t, e, n) {
              var r = n[0],
                i = n[1],
                a = n[2],
                o = n[3],
                s = e[0],
                u = e[1],
                c = e[2],
                l = e[3];
              return (
                (t[0] = s * o + l * r + u * a - c * i),
                (t[1] = u * o + l * i + c * r - s * a),
                (t[2] = c * o + l * a + s * i - u * r),
                (t[3] = l * o - s * r - u * i - c * a),
                (s = e[4]),
                (u = e[5]),
                (c = e[6]),
                (l = e[7]),
                (t[4] = s * o + l * r + u * a - c * i),
                (t[5] = u * o + l * i + c * r - s * a),
                (t[6] = c * o + l * a + s * i - u * r),
                (t[7] = l * o - s * r - u * i - c * a),
                t
              );
            }),
            (e.rotateByQuatPrepend = function(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = n[0],
                u = n[1],
                c = n[2],
                l = n[3];
              return (
                (t[0] = r * l + o * s + i * c - a * u),
                (t[1] = i * l + o * u + a * s - r * c),
                (t[2] = a * l + o * c + r * u - i * s),
                (t[3] = o * l - r * s - i * u - a * c),
                (s = n[4]),
                (u = n[5]),
                (c = n[6]),
                (l = n[7]),
                (t[4] = r * l + o * s + i * c - a * u),
                (t[5] = i * l + o * u + a * s - r * c),
                (t[6] = a * l + o * c + r * u - i * s),
                (t[7] = o * l - r * s - i * u - a * c),
                t
              );
            }),
            (e.rotateAroundAxis = function(t, e, n, r) {
              if (Math.abs(r) < s.EPSILON) return a(t, e);
              var i = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
              r *= 0.5;
              var o = Math.sin(r),
                u = (o * n[0]) / i,
                c = (o * n[1]) / i,
                l = (o * n[2]) / i,
                h = Math.cos(r),
                f = e[0],
                d = e[1],
                _ = e[2],
                p = e[3];
              (t[0] = f * h + p * u + d * l - _ * c),
                (t[1] = d * h + p * c + _ * u - f * l),
                (t[2] = _ * h + p * l + f * c - d * u),
                (t[3] = p * h - f * u - d * c - _ * l);
              var v = e[4],
                E = e[5],
                m = e[6],
                T = e[7];
              return (
                (t[4] = v * h + T * u + E * l - m * c),
                (t[5] = E * h + T * c + m * u - v * l),
                (t[6] = m * h + T * l + v * c - E * u),
                (t[7] = T * h - v * u - E * c - m * l),
                t
              );
            }),
            (e.add = function(t, e, n) {
              return (
                (t[0] = e[0] + n[0]),
                (t[1] = e[1] + n[1]),
                (t[2] = e[2] + n[2]),
                (t[3] = e[3] + n[3]),
                (t[4] = e[4] + n[4]),
                (t[5] = e[5] + n[5]),
                (t[6] = e[6] + n[6]),
                (t[7] = e[7] + n[7]),
                t
              );
            }),
            (e.multiply = o),
            (e.scale = function(t, e, n) {
              return (
                (t[0] = e[0] * n),
                (t[1] = e[1] * n),
                (t[2] = e[2] * n),
                (t[3] = e[3] * n),
                (t[4] = e[4] * n),
                (t[5] = e[5] * n),
                (t[6] = e[6] * n),
                (t[7] = e[7] * n),
                t
              );
            }),
            (e.lerp = function(t, e, n, r) {
              var i = 1 - r;
              return (
                l(e, n) < 0 && (r = -r),
                (t[0] = e[0] * i + n[0] * r),
                (t[1] = e[1] * i + n[1] * r),
                (t[2] = e[2] * i + n[2] * r),
                (t[3] = e[3] * i + n[3] * r),
                (t[4] = e[4] * i + n[4] * r),
                (t[5] = e[5] * i + n[5] * r),
                (t[6] = e[6] * i + n[6] * r),
                (t[7] = e[7] * i + n[7] * r),
                t
              );
            }),
            (e.invert = function(t, e) {
              var n = f(e);
              return (
                (t[0] = -e[0] / n),
                (t[1] = -e[1] / n),
                (t[2] = -e[2] / n),
                (t[3] = e[3] / n),
                (t[4] = -e[4] / n),
                (t[5] = -e[5] / n),
                (t[6] = -e[6] / n),
                (t[7] = e[7] / n),
                t
              );
            }),
            (e.conjugate = function(t, e) {
              return (
                (t[0] = -e[0]),
                (t[1] = -e[1]),
                (t[2] = -e[2]),
                (t[3] = e[3]),
                (t[4] = -e[4]),
                (t[5] = -e[5]),
                (t[6] = -e[6]),
                (t[7] = e[7]),
                t
              );
            }),
            (e.normalize = function(t, e) {
              var n = f(e);
              if (n > 0) {
                n = Math.sqrt(n);
                var r = e[0] / n,
                  i = e[1] / n,
                  a = e[2] / n,
                  o = e[3] / n,
                  s = e[4],
                  u = e[5],
                  c = e[6],
                  l = e[7],
                  h = r * s + i * u + a * c + o * l;
                (t[0] = r),
                  (t[1] = i),
                  (t[2] = a),
                  (t[3] = o),
                  (t[4] = (s - r * h) / n),
                  (t[5] = (u - i * h) / n),
                  (t[6] = (c - a * h) / n),
                  (t[7] = (l - o * h) / n);
              }
              return t;
            }),
            (e.str = function(t) {
              return (
                "quat2(" +
                t[0] +
                ", " +
                t[1] +
                ", " +
                t[2] +
                ", " +
                t[3] +
                ", " +
                t[4] +
                ", " +
                t[5] +
                ", " +
                t[6] +
                ", " +
                t[7] +
                ")"
              );
            }),
            (e.exactEquals = function(t, e) {
              return (
                t[0] === e[0] &&
                t[1] === e[1] &&
                t[2] === e[2] &&
                t[3] === e[3] &&
                t[4] === e[4] &&
                t[5] === e[5] &&
                t[6] === e[6] &&
                t[7] === e[7]
              );
            }),
            (e.equals = function(t, e) {
              var n = t[0],
                r = t[1],
                i = t[2],
                a = t[3],
                o = t[4],
                u = t[5],
                c = t[6],
                l = t[7],
                h = e[0],
                f = e[1],
                d = e[2],
                _ = e[3],
                p = e[4],
                v = e[5],
                E = e[6],
                m = e[7];
              return (
                Math.abs(n - h) <=
                  s.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) &&
                Math.abs(r - f) <=
                  s.EPSILON * Math.max(1, Math.abs(r), Math.abs(f)) &&
                Math.abs(i - d) <=
                  s.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) &&
                Math.abs(a - _) <=
                  s.EPSILON * Math.max(1, Math.abs(a), Math.abs(_)) &&
                Math.abs(o - p) <=
                  s.EPSILON * Math.max(1, Math.abs(o), Math.abs(p)) &&
                Math.abs(u - v) <=
                  s.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) &&
                Math.abs(c - E) <=
                  s.EPSILON * Math.max(1, Math.abs(c), Math.abs(E)) &&
                Math.abs(l - m) <=
                  s.EPSILON * Math.max(1, Math.abs(l), Math.abs(m))
              );
            });
          var s = r(n(3)),
            u = r(n(20)),
            c = r(n(19)),
            l =
              ((e.getReal = u.copy),
              (e.setReal = u.copy),
              (e.mul = o),
              (e.dot = u.dot)),
            h = (e.length = u.length),
            f = ((e.len = h), (e.squaredLength = u.squaredLength));
          e.sqrLen = f;
        },
        function(t, e, n) {
          "use strict";
          function r() {
            var t = new f.ARRAY_TYPE(2);
            return f.ARRAY_TYPE != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
          }
          function i(t, e, n) {
            return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
          }
          function a(t, e, n) {
            return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
          }
          function o(t, e, n) {
            return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
          }
          function s(t, e) {
            var n = e[0] - t[0],
              r = e[1] - t[1];
            return Math.sqrt(n * n + r * r);
          }
          function u(t, e) {
            var n = e[0] - t[0],
              r = e[1] - t[1];
            return n * n + r * r;
          }
          function c(t) {
            var e = t[0],
              n = t[1];
            return Math.sqrt(e * e + n * n);
          }
          function l(t) {
            var e = t[0],
              n = t[1];
            return e * e + n * n;
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.forEach = e.sqrLen = e.sqrDist = e.dist = e.div = e.mul = e.sub = e.len = void 0),
            (e.create = r),
            (e.clone = function(t) {
              var e = new f.ARRAY_TYPE(2);
              return (e[0] = t[0]), (e[1] = t[1]), e;
            }),
            (e.fromValues = function(t, e) {
              var n = new f.ARRAY_TYPE(2);
              return (n[0] = t), (n[1] = e), n;
            }),
            (e.copy = function(t, e) {
              return (t[0] = e[0]), (t[1] = e[1]), t;
            }),
            (e.set = function(t, e, n) {
              return (t[0] = e), (t[1] = n), t;
            }),
            (e.add = function(t, e, n) {
              return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
            }),
            (e.subtract = i),
            (e.multiply = a),
            (e.divide = o),
            (e.ceil = function(t, e) {
              return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
            }),
            (e.floor = function(t, e) {
              return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
            }),
            (e.min = function(t, e, n) {
              return (
                (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t
              );
            }),
            (e.max = function(t, e, n) {
              return (
                (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t
              );
            }),
            (e.round = function(t, e) {
              return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
            }),
            (e.scale = function(t, e, n) {
              return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
            }),
            (e.scaleAndAdd = function(t, e, n, r) {
              return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), t;
            }),
            (e.distance = s),
            (e.squaredDistance = u),
            (e.length = c),
            (e.squaredLength = l),
            (e.negate = function(t, e) {
              return (t[0] = -e[0]), (t[1] = -e[1]), t;
            }),
            (e.inverse = function(t, e) {
              return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
            }),
            (e.normalize = function(t, e) {
              var n = e[0],
                r = e[1],
                i = n * n + r * r;
              return (
                i > 0 &&
                  ((i = 1 / Math.sqrt(i)),
                  (t[0] = e[0] * i),
                  (t[1] = e[1] * i)),
                t
              );
            }),
            (e.dot = function(t, e) {
              return t[0] * e[0] + t[1] * e[1];
            }),
            (e.cross = function(t, e, n) {
              var r = e[0] * n[1] - e[1] * n[0];
              return (t[0] = t[1] = 0), (t[2] = r), t;
            }),
            (e.lerp = function(t, e, n, r) {
              var i = e[0],
                a = e[1];
              return (
                (t[0] = i + r * (n[0] - i)), (t[1] = a + r * (n[1] - a)), t
              );
            }),
            (e.random = function(t, e) {
              e = e || 1;
              var n = 2 * f.RANDOM() * Math.PI;
              return (t[0] = Math.cos(n) * e), (t[1] = Math.sin(n) * e), t;
            }),
            (e.transformMat2 = function(t, e, n) {
              var r = e[0],
                i = e[1];
              return (
                (t[0] = n[0] * r + n[2] * i), (t[1] = n[1] * r + n[3] * i), t
              );
            }),
            (e.transformMat2d = function(t, e, n) {
              var r = e[0],
                i = e[1];
              return (
                (t[0] = n[0] * r + n[2] * i + n[4]),
                (t[1] = n[1] * r + n[3] * i + n[5]),
                t
              );
            }),
            (e.transformMat3 = function(t, e, n) {
              var r = e[0],
                i = e[1];
              return (
                (t[0] = n[0] * r + n[3] * i + n[6]),
                (t[1] = n[1] * r + n[4] * i + n[7]),
                t
              );
            }),
            (e.transformMat4 = function(t, e, n) {
              var r = e[0],
                i = e[1];
              return (
                (t[0] = n[0] * r + n[4] * i + n[12]),
                (t[1] = n[1] * r + n[5] * i + n[13]),
                t
              );
            }),
            (e.rotate = function(t, e, n, r) {
              var i = e[0] - n[0],
                a = e[1] - n[1],
                o = Math.sin(r),
                s = Math.cos(r);
              return (
                (t[0] = i * s - a * o + n[0]), (t[1] = i * o + a * s + n[1]), t
              );
            }),
            (e.angle = function(t, e) {
              var n = t[0],
                r = t[1],
                i = e[0],
                a = e[1],
                o = n * n + r * r;
              o > 0 && (o = 1 / Math.sqrt(o));
              var s = i * i + a * a;
              s > 0 && (s = 1 / Math.sqrt(s));
              var u = (n * i + r * a) * o * s;
              return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u);
            }),
            (e.str = function(t) {
              return "vec2(" + t[0] + ", " + t[1] + ")";
            }),
            (e.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1];
            }),
            (e.equals = function(t, e) {
              var n = t[0],
                r = t[1],
                i = e[0],
                a = e[1];
              return (
                Math.abs(n - i) <=
                  f.EPSILON * Math.max(1, Math.abs(n), Math.abs(i)) &&
                Math.abs(r - a) <=
                  f.EPSILON * Math.max(1, Math.abs(r), Math.abs(a))
              );
            });
          var h,
            f = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(3));
          (e.len = c),
            (e.sub = i),
            (e.mul = a),
            (e.div = o),
            (e.dist = s),
            (e.sqrDist = u),
            (e.sqrLen = l),
            (e.forEach =
              ((h = r()),
              function(t, e, n, r, i, a) {
                var o,
                  s = void 0;
                for (
                  e || (e = 2),
                    n || (n = 0),
                    o = r ? Math.min(r * e + n, t.length) : t.length,
                    s = n;
                  s < o;
                  s += e
                )
                  (h[0] = t[s]),
                    (h[1] = t[s + 1]),
                    i(h, h, a),
                    (t[s] = h[0]),
                    (t[s + 1] = h[1]);
                return t;
              }));
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function(t, e) {
              var n = t.getExtension(e);
              if (!n) return !1;
              var r = e.split("_")[0],
                i = new RegExp(r + "$");
              for (var a in n)
                if ("function" == typeof n[a]) {
                  var o = a.replace(i, "");
                  a.substring && (t[o] = n[a].bind(n));
                }
              return !0;
            });
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(n(0)),
            a = r(n(23));
          e.default = function() {
            for (var t in a.default)
              i.default[t]
                ? console.log("already exist : ", t)
                : (i.default[t] = a.default[t]);
          };
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function() {
              return (
                o ||
                  (s = a.default.webgl2
                    ? a.default.gl.FLOAT
                    : a.default.getExtension("OES_texture_float")
                    ? a.default.gl.FLOAT
                    : (console.warn(
                        "USING FLOAT BUT OES_texture_float NOT SUPPORTED"
                      ),
                      a.default.gl.UNSIGNED_BYTE)),
                s
              );
            });
          var r,
            i = n(0),
            a = (r = i) && r.__esModule ? r : { default: r },
            o = !1,
            s = void 0;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function() {
              return (
                o ||
                  (s = (function() {
                    if (a.default.webgl2) return a.default.gl.HALF_FLOAT;
                    var t = a.default.getExtension("OES_texture_half_float");
                    return t
                      ? t.HALF_FLOAT_OES
                      : (console.warn(
                          "USING HALF FLOAT BUT OES_texture_half_float NOT SUPPORTED"
                        ),
                        a.default.gl.UNSIGNED_BYTE);
                  })()),
                s
              );
            });
          var r,
            i = n(0),
            a = (r = i) && r.__esModule ? r : { default: r },
            o = !1,
            s = void 0;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = [
              "EXT_shader_texture_lod",
              "EXT_sRGB",
              "EXT_frag_depth",
              "OES_texture_float",
              "OES_texture_half_float",
              "OES_texture_float_linear",
              "OES_texture_half_float_linear",
              "OES_standard_derivatives",
              "WEBGL_depth_texture",
              "EXT_texture_filter_anisotropic",
              "OES_vertex_array_object",
              "ANGLE_instanced_arrays",
              "WEBGL_draw_buffers"
            ]);
        },
        function(t, e, n) {
          "use strict";
          t.exports = function(t) {
            "string" == typeof t && (t = [t]);
            for (
              var e = [].slice.call(arguments, 1), n = [], r = 0;
              r < t.length - 1;
              r++
            )
              n.push(t[r], e[r] || "");
            return n.push(t[r]), n.join("");
          };
        },
        function(t, e) {
          t.exports =
            "// basic.frag\n\n#define SHADER_NAME BASIC_FRAGMENT\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float time;\n// uniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = vec4(vTextureCoord, sin(time) * .5 + .5, 1.0);\n}";
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return 0 !== t && !(t & (t - 1));
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i,
            a = n(0),
            o = (i = a) && i.__esModule ? i : { default: i };
          e.default = function(t, e, n, i) {
            if (!t.minFilter) {
              var a = o.default.LINEAR;
              n && n && r(n) && r(i) && (a = o.default.NEAREST_MIPMAP_LINEAR),
                (t.minFilter = a);
            }
            return (
              (t.mipmap = t.mipmap || !0),
              (t.magFilter = t.magFilter || o.default.LINEAR),
              (t.wrapS = t.wrapS || o.default.CLAMP_TO_EDGE),
              (t.wrapT = t.wrapT || o.default.CLAMP_TO_EDGE),
              (t.internalFormat = t.internalFormat || o.default.RGBA),
              (t.format = t.format || o.default.RGBA),
              (t.premultiplyAlpha = t.premultiplyAlpha || !1),
              (t.level = t.level || 0),
              t
            );
          };
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return (
              t.charCodeAt(0) +
              (t.charCodeAt(1) << 8) +
              (t.charCodeAt(2) << 16) +
              (t.charCodeAt(3) << 24)
            );
          }
          var i = 542327876,
            a = 131072,
            o = 4,
            s = r("DXT1"),
            u = r("DXT3"),
            c = r("DXT5"),
            l = r("DX10"),
            h = 116,
            f = 512,
            d = 3,
            _ = 2,
            p = 31,
            v = 0,
            E = 1,
            m = 2,
            T = 3,
            b = 4,
            g = 7,
            y = 20,
            R = 21,
            M = 28;
          t.exports = function(t) {
            var e = new Int32Array(t, 0, p);
            if (e[v] !== i)
              throw new Error("Invalid magic number in DDS header");
            if (!e[y] & o)
              throw new Error("Unsupported format, must contain a FourCC code");
            var n,
              r,
              A,
              x = e[R];
            switch (x) {
              case s:
                (n = 8), (r = "dxt1");
                break;
              case u:
                (n = 16), (r = "dxt3");
                break;
              case c:
                (n = 16), (r = "dxt5");
                break;
              case h:
                r = "rgba32f";
                break;
              case l:
                var w = new Uint32Array(t.slice(128, 148));
                r = w[0];
                var P = w[1];
                if ((w[2], w[3], w[4], P !== d || r !== _))
                  throw new Error("Unsupported DX10 texture format " + r);
                r = "rgba32f";
                break;
              default:
                throw new Error(
                  "Unsupported FourCC code: " +
                    ((A = x),
                    String.fromCharCode(
                      255 & A,
                      (A >> 8) & 255,
                      (A >> 16) & 255,
                      (A >> 24) & 255
                    ))
                );
            }
            var O = e[m],
              L = 1;
            O & a && (L = Math.max(1, e[g]));
            var S = !1;
            e[M] & f && (S = !0);
            var I,
              N = e[b],
              C = e[T],
              F = e[E] + 4,
              U = N,
              D = C,
              B = [];
            if ((x === l && (F += 20), S))
              for (var k = 0; k < 6; k++) {
                if ("rgba32f" !== r)
                  throw new Error("Only RGBA32f cubemaps are supported");
                (N = U), (C = D);
                for (var V = Math.log(N) / Math.log(2) + 1, X = 0; X < V; X++)
                  (I = N * C * 16),
                    B.push({ offset: F, length: I, shape: [N, C] }),
                    X < L && (F += I),
                    (N = Math.floor(N / 2)),
                    (C = Math.floor(C / 2));
              }
            else
              for (X = 0; X < L; X++)
                (I = (((Math.max(4, N) / 4) * Math.max(4, C)) / 4) * n),
                  B.push({ offset: F, length: I, shape: [N, C] }),
                  (F += I),
                  (N = Math.floor(N / 2)),
                  (C = Math.floor(C / 2));
            return {
              shape: [U, D],
              images: B,
              format: r,
              flags: O,
              cubemap: S
            };
          };
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = r(n(27)),
            s = void 0,
            u = (function() {
              function t(e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (s = a.default.gl),
                  (this._size = e),
                  (this.magFilter = n.magFilter || s.LINEAR),
                  (this.minFilter = n.minFilter || s.LINEAR),
                  (this.wrapS = n.wrapS || s.CLAMP_TO_EDGE),
                  (this.wrapT = n.wrapT || s.CLAMP_TO_EDGE),
                  this._init();
              }
              return (
                i(t, [
                  {
                    key: "_init",
                    value: function() {
                      (this.texture = s.createTexture()),
                        (this.glTexture = new o.default(this.texture, {}, !0)),
                        s.bindTexture(s.TEXTURE_CUBE_MAP, this.texture),
                        s.texParameteri(
                          s.TEXTURE_CUBE_MAP,
                          s.TEXTURE_MAG_FILTER,
                          this.magFilter
                        ),
                        s.texParameteri(
                          s.TEXTURE_CUBE_MAP,
                          s.TEXTURE_MIN_FILTER,
                          this.minFilter
                        ),
                        s.texParameteri(
                          s.TEXTURE_CUBE_MAP,
                          s.TEXTURE_WRAP_S,
                          this.wrapS
                        ),
                        s.texParameteri(
                          s.TEXTURE_CUBE_MAP,
                          s.TEXTURE_WRAP_T,
                          this.wrapT
                        );
                      for (
                        var t = [
                            s.TEXTURE_CUBE_MAP_POSITIVE_X,
                            s.TEXTURE_CUBE_MAP_NEGATIVE_X,
                            s.TEXTURE_CUBE_MAP_POSITIVE_Y,
                            s.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                            s.TEXTURE_CUBE_MAP_POSITIVE_Z,
                            s.TEXTURE_CUBE_MAP_NEGATIVE_Z
                          ],
                          e = 0;
                        e < t.length;
                        e++
                      )
                        s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, !1),
                          s.texImage2D(
                            t[e],
                            0,
                            s.RGBA,
                            this.width,
                            this.height,
                            0,
                            s.RGBA,
                            s.FLOAT,
                            null
                          );
                      this._frameBuffers = [];
                      for (var n = 0; n < t.length; n++) {
                        var r = s.createFramebuffer();
                        s.bindFramebuffer(s.FRAMEBUFFER, r),
                          s.framebufferTexture2D(
                            s.FRAMEBUFFER,
                            s.COLOR_ATTACHMENT0,
                            t[n],
                            this.texture,
                            0
                          );
                        var i = s.checkFramebufferStatus(s.FRAMEBUFFER);
                        i !== s.FRAMEBUFFER_COMPLETE &&
                          console.log(
                            "'gl.checkFramebufferStatus() returned '" + i
                          ),
                          this._frameBuffers.push(r);
                      }
                      s.bindFramebuffer(s.FRAMEBUFFER, null),
                        s.bindRenderbuffer(s.RENDERBUFFER, null),
                        s.bindTexture(s.TEXTURE_CUBE_MAP, null);
                    }
                  },
                  {
                    key: "bind",
                    value: function(t) {
                      a.default.viewport(0, 0, this.width, this.height),
                        s.bindFramebuffer(s.FRAMEBUFFER, this._frameBuffers[t]);
                    }
                  },
                  {
                    key: "unbind",
                    value: function() {
                      s.bindFramebuffer(s.FRAMEBUFFER, null),
                        a.default.viewport(
                          0,
                          0,
                          a.default.width,
                          a.default.height
                        );
                    }
                  },
                  {
                    key: "getTexture",
                    value: function() {
                      return this.glTexture;
                    }
                  },
                  {
                    key: "width",
                    get: function() {
                      return this._size;
                    }
                  },
                  {
                    key: "height",
                    get: function() {
                      return this._size;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = u;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function i(t) {
            return 0 !== t && !(t & (t - 1));
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var a = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = r(n(0)),
            s = r(n(25)),
            u = void 0,
            c = (function() {
              function t(e, n) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (u = o.default.gl),
                  (this.width = e),
                  (this.height = n),
                  (this.magFilter = r.magFilter || u.LINEAR),
                  (this.minFilter = r.minFilter || u.LINEAR),
                  (this.wrapS = r.wrapS || u.CLAMP_TO_EDGE),
                  (this.wrapT = r.wrapT || u.CLAMP_TO_EDGE),
                  (this.useDepth = r.useDepth || !0),
                  (this.useStencil = r.useStencil || !1),
                  (this.texelType = r.type),
                  (this._numSample = r.numSample || 8),
                  (i(this.width) && i(this.height)) ||
                    ((this.wrapS = this.wrapT = u.CLAMP_TO_EDGE),
                    this.minFilter === u.LINEAR_MIPMAP_NEAREST &&
                      (this.minFilter = u.LINEAR)),
                  this._init();
              }
              return (
                a(t, [
                  {
                    key: "_init",
                    value: function() {
                      var t = u.UNSIGNED_BYTE;
                      this.texelType && (t = this.texelType),
                        (this.texelType = t),
                        (this.frameBuffer = u.createFramebuffer()),
                        (this.frameBufferColor = u.createFramebuffer()),
                        (this.renderBufferColor = u.createRenderbuffer()),
                        (this.renderBufferDepth = u.createRenderbuffer()),
                        (this.glTexture = this._createTexture()),
                        (this.glDepthTexture = this._createTexture(
                          u.DEPTH_COMPONENT16,
                          u.UNSIGNED_SHORT,
                          u.DEPTH_COMPONENT,
                          !0
                        )),
                        u.bindRenderbuffer(
                          u.RENDERBUFFER,
                          this.renderBufferColor
                        ),
                        u.renderbufferStorageMultisample(
                          u.RENDERBUFFER,
                          this._numSample,
                          u.RGBA8,
                          this.width,
                          this.height
                        ),
                        u.bindRenderbuffer(
                          u.RENDERBUFFER,
                          this.renderBufferDepth
                        ),
                        u.renderbufferStorageMultisample(
                          u.RENDERBUFFER,
                          this._numSample,
                          u.DEPTH_COMPONENT16,
                          this.width,
                          this.height
                        ),
                        u.bindFramebuffer(u.FRAMEBUFFER, this.frameBuffer),
                        u.framebufferRenderbuffer(
                          u.FRAMEBUFFER,
                          u.COLOR_ATTACHMENT0,
                          u.RENDERBUFFER,
                          this.renderBufferColor
                        ),
                        u.framebufferRenderbuffer(
                          u.FRAMEBUFFER,
                          u.DEPTH_ATTACHMENT,
                          u.RENDERBUFFER,
                          this.renderBufferDepth
                        ),
                        u.bindFramebuffer(u.FRAMEBUFFER, null),
                        u.bindFramebuffer(u.FRAMEBUFFER, this.frameBufferColor),
                        u.framebufferTexture2D(
                          u.FRAMEBUFFER,
                          u.COLOR_ATTACHMENT0,
                          u.TEXTURE_2D,
                          this.glTexture.texture,
                          0
                        ),
                        u.bindFramebuffer(u.FRAMEBUFFER, null);
                    }
                  },
                  {
                    key: "_createTexture",
                    value: function(t, e, n) {
                      var r =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3];
                      void 0 === t && (t = u.RGBA),
                        void 0 === e && (e = this.texelType),
                        n || (n = t);
                      var i = u.createTexture(),
                        a = new s.default(i, !0),
                        c = r ? o.default.NEAREST : this.magFilter,
                        l = r ? o.default.NEAREST : this.minFilter;
                      return (
                        u.bindTexture(u.TEXTURE_2D, i),
                        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, c),
                        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, l),
                        u.texParameteri(
                          u.TEXTURE_2D,
                          u.TEXTURE_WRAP_S,
                          this.wrapS
                        ),
                        u.texParameteri(
                          u.TEXTURE_2D,
                          u.TEXTURE_WRAP_T,
                          this.wrapT
                        ),
                        u.texImage2D(
                          u.TEXTURE_2D,
                          0,
                          t,
                          this.width,
                          this.height,
                          0,
                          n,
                          e,
                          null
                        ),
                        u.bindTexture(u.TEXTURE_2D, null),
                        a
                      );
                    }
                  },
                  {
                    key: "bind",
                    value: function() {
                      (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0]) &&
                        o.default.viewport(0, 0, this.width, this.height),
                        u.bindFramebuffer(u.FRAMEBUFFER, this.frameBuffer);
                    }
                  },
                  {
                    key: "unbind",
                    value: function() {
                      (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0]) &&
                        o.default.viewport(
                          0,
                          0,
                          o.default.width,
                          o.default.height
                        );
                      var t = this.width,
                        e = this.height;
                      u.bindFramebuffer(u.FRAMEBUFFER, null),
                        u.bindFramebuffer(u.READ_FRAMEBUFFER, this.frameBuffer),
                        u.bindFramebuffer(
                          u.DRAW_FRAMEBUFFER,
                          this.frameBufferColor
                        ),
                        u.clearBufferfv(u.COLOR, 0, [0, 0, 0, 0]),
                        u.blitFramebuffer(
                          0,
                          0,
                          t,
                          e,
                          0,
                          0,
                          t,
                          e,
                          u.COLOR_BUFFER_BIT,
                          o.default.NEAREST
                        ),
                        u.bindFramebuffer(u.FRAMEBUFFER, null);
                    }
                  },
                  {
                    key: "getTexture",
                    value: function() {
                      return (
                        arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        this.glTexture
                      );
                    }
                  },
                  {
                    key: "getDepthTexture",
                    value: function() {
                      return this.glDepthTexture;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = c;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = r(n(1)),
            s = r(n(5)),
            u = void 0,
            c = (function() {
              function t(e, n) {
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (u = a.default.gl),
                  (this._vs = e),
                  (this._fs = n),
                  this._init();
              }
              return (
                i(t, [
                  {
                    key: "_init",
                    value: function() {
                      (this._meshCurrent = new s.default()),
                        (this._meshTarget = new s.default()),
                        (this._numPoints = -1),
                        (this._varyings = []),
                        (this.transformFeedback = u.createTransformFeedback());
                    }
                  },
                  {
                    key: "bufferData",
                    value: function(t, e, n) {
                      var r = !!n;
                      console.log("is Transform feedback ?", e, r),
                        this._meshCurrent.bufferData(
                          t,
                          e,
                          null,
                          u.STREAM_COPY,
                          !1
                        ),
                        this._meshTarget.bufferData(
                          t,
                          e,
                          null,
                          u.STREAM_COPY,
                          !1
                        ),
                        r &&
                          (this._varyings.push(n),
                          this._numPoints < 0 && (this._numPoints = t.length));
                    }
                  },
                  {
                    key: "bufferIndex",
                    value: function(t) {
                      this._meshCurrent.bufferIndex(t),
                        this._meshTarget.bufferIndex(t);
                    }
                  },
                  {
                    key: "uniform",
                    value: function(t, e, n) {
                      this.shader && this.shader.uniform(t, e, n);
                    }
                  },
                  {
                    key: "generate",
                    value: function() {
                      this.shader = new o.default(
                        this._vs,
                        this._fs,
                        this._varyings
                      );
                    }
                  },
                  {
                    key: "render",
                    value: function() {
                      this.shader || this.generate(),
                        this.shader.bind(),
                        a.default.drawTransformFeedback(this),
                        this._swap();
                    }
                  },
                  {
                    key: "_swap",
                    value: function() {
                      var t = this._meshCurrent;
                      (this._meshCurrent = this._meshTarget),
                        (this._meshTarget = t);
                    }
                  },
                  {
                    key: "numPoints",
                    get: function() {
                      return this._numPoints;
                    }
                  },
                  {
                    key: "meshCurrent",
                    get: function() {
                      return this._meshCurrent;
                    }
                  },
                  {
                    key: "meshTarget",
                    get: function() {
                      return this._meshTarget;
                    }
                  },
                  {
                    key: "meshSource",
                    get: function() {
                      return this._meshCurrent;
                    }
                  },
                  {
                    key: "meshDestination",
                    get: function() {
                      return this._meshTarget;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = c;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(4),
            o = (r = a) && r.__esModule ? r : { default: r },
            s = (function() {
              function t(e) {
                var n = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0.1,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0.9;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._value = e),
                  (this._targetValue = e),
                  (this.speed = r),
                  (this.decreaseRate = i),
                  (this._velocity = 0),
                  (this._efIndex = o.default.addEF(function() {
                    return n._update();
                  }));
              }
              return (
                i(t, [
                  {
                    key: "_update",
                    value: function() {
                      this._checkLimit(),
                        Math.abs(this._targetValue - this._value) < 1e-4
                          ? (this._value = this._targetValue)
                          : ((this._velocity +=
                              (this._targetValue - this._value) * this.speed),
                            (this._value += this._velocity),
                            (this._velocity *= this.decreaseRate),
                            Math.abs(this._targetValue - this._value) < 1e-4 &&
                              (this._value = this._targetValue));
                    }
                  },
                  {
                    key: "limit",
                    value: function(t, e) {
                      t > e
                        ? this.limit(e, t)
                        : ((this._min = t),
                          (this._max = e),
                          this._checkLimit());
                    }
                  },
                  {
                    key: "_checkLimit",
                    value: function() {
                      void 0 !== this._min &&
                        this._targetValue < this._min &&
                        (this._targetValue = this._min),
                        void 0 !== this._max &&
                          this._targetValue > this._max &&
                          (this._targetValue = this._max);
                    }
                  },
                  {
                    key: "destroy",
                    value: function() {
                      o.default.removeEF(this._efIndex);
                    }
                  },
                  {
                    key: "value",
                    set: function(t) {
                      this._targetValue = t;
                    },
                    get: function() {
                      return this._value;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = s;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(4),
            o = (r = a) && r.__esModule ? r : { default: r },
            s = {
              Linear: {
                None: function(t) {
                  return t;
                }
              },
              Quadratic: {
                In: function(t) {
                  return t * t;
                },
                Out: function(t) {
                  return t * (2 - t);
                },
                InOut: function(t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t
                    : -0.5 * (--t * (t - 2) - 1);
                }
              },
              Cubic: {
                In: function(t) {
                  return t * t * t;
                },
                Out: function(t) {
                  return --t * t * t + 1;
                },
                InOut: function(t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t * t
                    : 0.5 * ((t -= 2) * t * t + 2);
                }
              },
              Quartic: {
                In: function(t) {
                  return t * t * t * t;
                },
                Out: function(t) {
                  return 1 - --t * t * t * t;
                },
                InOut: function(t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t * t * t
                    : -0.5 * ((t -= 2) * t * t * t - 2);
                }
              },
              Quintic: {
                In: function(t) {
                  return t * t * t * t * t;
                },
                Out: function(t) {
                  return --t * t * t * t * t + 1;
                },
                InOut: function(t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t * t * t * t
                    : 0.5 * ((t -= 2) * t * t * t * t + 2);
                }
              },
              Sinusoidal: {
                In: function(t) {
                  return 1 - Math.cos((t * Math.PI) / 2);
                },
                Out: function(t) {
                  return Math.sin((t * Math.PI) / 2);
                },
                InOut: function(t) {
                  return 0.5 * (1 - Math.cos(Math.PI * t));
                }
              },
              Exponential: {
                In: function(t) {
                  return 0 === t ? 0 : Math.pow(1024, t - 1);
                },
                Out: function(t) {
                  return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                },
                InOut: function(t) {
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (t *= 2) < 1
                    ? 0.5 * Math.pow(1024, t - 1)
                    : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                }
              },
              Circular: {
                In: function(t) {
                  return 1 - Math.sqrt(1 - t * t);
                },
                Out: function(t) {
                  return Math.sqrt(1 - --t * t);
                },
                InOut: function(t) {
                  return (t *= 2) < 1
                    ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                    : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                }
              },
              Elastic: {
                In: function(t) {
                  var e = void 0,
                    n = 0.1;
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (!n || n < 1
                        ? ((n = 1), (e = 0.1))
                        : (e = (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
                      -n *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / 0.4));
                },
                Out: function(t) {
                  var e = void 0,
                    n = 0.1;
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (!n || n < 1
                        ? ((n = 1), (e = 0.1))
                        : (e = (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
                      n *
                        Math.pow(2, -10 * t) *
                        Math.sin(((t - e) * (2 * Math.PI)) / 0.4) +
                        1);
                },
                InOut: function(t) {
                  var e = void 0,
                    n = 0.1;
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (!n || n < 1
                        ? ((n = 1), (e = 0.1))
                        : (e = (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
                      (t *= 2) < 1
                        ? n *
                          Math.pow(2, 10 * (t -= 1)) *
                          Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                          -0.5
                        : n *
                            Math.pow(2, -10 * (t -= 1)) *
                            Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                            0.5 +
                          1);
                }
              },
              Back: {
                In: function(t) {
                  var e = 1.70158;
                  return t * t * ((e + 1) * t - e);
                },
                Out: function(t) {
                  var e = 1.70158;
                  return --t * t * ((e + 1) * t + e) + 1;
                },
                InOut: function(t) {
                  var e = 2.5949095;
                  return (t *= 2) < 1
                    ? t * t * ((e + 1) * t - e) * 0.5
                    : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
                }
              },
              Bounce: {
                in: function(t) {
                  return 1 - s.Bounce.out(1 - t);
                },
                out: function(t) {
                  return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                },
                inOut: function(t) {
                  return t < 0.5
                    ? 0.5 * s.Bounce.in(2 * t)
                    : 0.5 * s.Bounce.out(2 * t - 1) + 0.5;
                }
              }
            },
            u = (function() {
              function t(e) {
                var n = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "expOut",
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0.01;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._value = e),
                  (this._startValue = e),
                  (this._targetValue = e),
                  (this._counter = 1),
                  (this.speed = i),
                  (this.easing = r),
                  (this._needUpdate = !0),
                  (this._efIndex = o.default.addEF(function() {
                    return n._update();
                  }));
              }
              return (
                i(t, [
                  {
                    key: "_update",
                    value: function() {
                      var t = this._counter + this.speed;
                      t > 1 && (t = 1),
                        this._counter !== t
                          ? ((this._counter = t), (this._needUpdate = !0))
                          : (this._needUpdate = !1);
                    }
                  },
                  {
                    key: "limit",
                    value: function(t, e) {
                      t > e
                        ? this.limit(e, t)
                        : ((this._min = t),
                          (this._max = e),
                          this._checkLimit());
                    }
                  },
                  {
                    key: "setTo",
                    value: function(t) {
                      (this._value = t),
                        (this._targetValue = t),
                        (this._counter = 1);
                    }
                  },
                  {
                    key: "_checkLimit",
                    value: function() {
                      void 0 !== this._min &&
                        this._targetValue < this._min &&
                        (this._targetValue = this._min),
                        void 0 !== this._max &&
                          this._targetValue > this._max &&
                          (this._targetValue = this._max);
                    }
                  },
                  {
                    key: "destroy",
                    value: function() {
                      o.default.removeEF(this._efIndex);
                    }
                  },
                  {
                    key: "value",
                    set: function(t) {
                      (this._startValue = this._value),
                        (this._targetValue = t),
                        this._checkLimit(),
                        (this._counter = 0);
                    },
                    get: function() {
                      if (this._needUpdate) {
                        var t = (function(t) {
                          switch (t) {
                            default:
                            case "linear":
                              return s.Linear.None;
                            case "expIn":
                              return s.Exponential.In;
                            case "expOut":
                              return s.Exponential.Out;
                            case "expInOut":
                              return s.Exponential.InOut;
                            case "cubicIn":
                              return s.Cubic.In;
                            case "cubicOut":
                              return s.Cubic.Out;
                            case "cubicInOut":
                              return s.Cubic.InOut;
                            case "quarticIn":
                              return s.Quartic.In;
                            case "quarticOut":
                              return s.Quartic.Out;
                            case "quarticInOut":
                              return s.Quartic.InOut;
                            case "quinticIn":
                              return s.Quintic.In;
                            case "quinticOut":
                              return s.Quintic.Out;
                            case "quinticInOut":
                              return s.Quintic.InOut;
                            case "sinusoidalIn":
                              return s.Sinusoidal.In;
                            case "sinusoidalOut":
                              return s.Sinusoidal.Out;
                            case "sinusoidalInOut":
                              return s.Sinusoidal.InOut;
                            case "circularIn":
                              return s.Circular.In;
                            case "circularOut":
                              return s.Circular.Out;
                            case "circularInOut":
                              return s.Circular.InOut;
                            case "elasticIn":
                              return s.Elastic.In;
                            case "elasticOut":
                              return s.Elastic.Out;
                            case "elasticInOut":
                              return s.Elastic.InOut;
                            case "backIn":
                              return s.Back.In;
                            case "backOut":
                              return s.Back.Out;
                            case "backInOut":
                              return s.Back.InOut;
                            case "bounceIn":
                              return s.Bounce.in;
                            case "bounceOut":
                              return s.Bounce.out;
                            case "bounceInOut":
                              return s.Bounce.inOut;
                          }
                        })(this.easing)(this._counter);
                        (this._value =
                          this._startValue +
                          t * (this._targetValue - this._startValue)),
                          (this._needUpdate = !1);
                      }
                      return this._value;
                    }
                  },
                  {
                    key: "targetValue",
                    get: function() {
                      return this._targetValue;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = u;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(2),
            o = r(n(10)),
            s = r(n(4)),
            u = function(t, e) {
              var n = e || {};
              return (
                t.touches
                  ? ((n.x = t.touches[0].pageX), (n.y = t.touches[0].pageY))
                  : ((n.x = t.clientX), (n.y = t.clientY)),
                n
              );
            },
            c = (function() {
              function t(e) {
                var n = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : window,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0.1;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._target = e),
                  (this._listenerTarget = r),
                  (this.matrix = a.mat4.create()),
                  (this.m = a.mat4.create()),
                  (this._vZaxis = a.vec3.clone([0, 0, 0])),
                  (this._zAxis = a.vec3.clone([0, 0, 1])),
                  (this.preMouse = { x: 0, y: 0 }),
                  (this.mouse = { x: 0, y: 0 }),
                  (this._isMouseDown = !1),
                  (this._rotation = a.quat.create()),
                  (this.tempRotation = a.quat.create()),
                  (this._rotateZMargin = 0),
                  (this._offset = 0.004),
                  (this._slerp = -1),
                  (this._isLocked = !1),
                  (this._diffX = new o.default(0, i)),
                  (this._diffY = new o.default(0, i)),
                  this._listenerTarget.addEventListener("mousedown", function(
                    t
                  ) {
                    return n._onDown(t);
                  }),
                  this._listenerTarget.addEventListener("touchstart", function(
                    t
                  ) {
                    return n._onDown(t);
                  }),
                  this._listenerTarget.addEventListener("mousemove", function(
                    t
                  ) {
                    return n._onMove(t);
                  }),
                  this._listenerTarget.addEventListener("touchmove", function(
                    t
                  ) {
                    return n._onMove(t);
                  }),
                  window.addEventListener("touchend", function() {
                    return n._onUp();
                  }),
                  window.addEventListener("mouseup", function() {
                    return n._onUp();
                  }),
                  s.default.addEF(function() {
                    return n._loop();
                  });
              }
              return (
                i(t, [
                  {
                    key: "inverseControl",
                    value: function() {
                      var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      this._isInvert = t;
                    }
                  },
                  {
                    key: "lock",
                    value: function() {
                      var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      this._isLocked = t;
                    }
                  },
                  {
                    key: "setCameraPos",
                    value: function(t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0.1;
                      if (((this.easing = e), !(this._slerp > 0))) {
                        var n = a.quat.clone(this._rotation);
                        this._updateRotation(n),
                          (this._rotation = a.quat.clone(n)),
                          (this._currDiffX = this.diffX = 0),
                          (this._currDiffY = this.diffY = 0),
                          (this._isMouseDown = !1),
                          (this._isRotateZ = 0),
                          (this._targetQuat = a.quat.clone(t)),
                          (this._slerp = 1);
                      }
                    }
                  },
                  {
                    key: "resetQuat",
                    value: function() {
                      (this._rotation = a.quat.clone([0, 0, 1, 0])),
                        (this.tempRotation = a.quat.clone([0, 0, 0, 0])),
                        (this._targetQuat = void 0),
                        (this._slerp = -1);
                    }
                  },
                  {
                    key: "_onDown",
                    value: function(t) {
                      if (!this._isLocked) {
                        var e = u(t),
                          n = a.quat.clone(this._rotation);
                        this._updateRotation(n),
                          (this._rotation = n),
                          (this._isMouseDown = !0),
                          (this._isRotateZ = 0),
                          (this.preMouse = { x: e.x, y: e.y }),
                          e.y < this._rotateZMargin ||
                          e.y > window.innerHeight - this._rotateZMargin
                            ? (this._isRotateZ = 1)
                            : (e.x < this._rotateZMargin ||
                                e.x >
                                  window.innerWidth - this._rotateZMargin) &&
                              (this._isRotateZ = 2),
                          this._diffX.setTo(0),
                          this._diffY.setTo(0);
                      }
                    }
                  },
                  {
                    key: "_onMove",
                    value: function(t) {
                      this._isLocked || u(t, this.mouse);
                    }
                  },
                  {
                    key: "_onUp",
                    value: function() {
                      this._isLocked || (this._isMouseDown = !1);
                    }
                  },
                  {
                    key: "_updateRotation",
                    value: function(t) {
                      this._isMouseDown &&
                        !this._isLocked &&
                        ((this._diffX.value = -(
                          this.mouse.x - this.preMouse.x
                        )),
                        (this._diffY.value = this.mouse.y - this.preMouse.y),
                        this._isInvert &&
                          ((this._diffX.value = -this._diffX.targetValue),
                          (this._diffY.value = -this._diffY.targetValue)));
                      var e = void 0,
                        n = void 0;
                      if (this._isRotateZ > 0)
                        1 === this._isRotateZ
                          ? ((e = -this._diffX.value * this._offset),
                            (e *=
                              this.preMouse.y < this._rotateZMargin ? -1 : 1),
                            (n = a.quat.clone([
                              0,
                              0,
                              Math.sin(e),
                              Math.cos(e)
                            ])),
                            a.quat.multiply(n, t, n))
                          : ((e = -this._diffY.value * this._offset),
                            (e *=
                              this.preMouse.x < this._rotateZMargin ? 1 : -1),
                            (n = a.quat.clone([
                              0,
                              0,
                              Math.sin(e),
                              Math.cos(e)
                            ])),
                            a.quat.multiply(n, t, n));
                      else {
                        var r = a.vec3.clone([
                            this._diffX.value,
                            this._diffY.value,
                            0
                          ]),
                          i = a.vec3.create();
                        a.vec3.cross(i, r, this._zAxis),
                          a.vec3.normalize(i, i),
                          (e = a.vec3.length(r) * this._offset),
                          (n = a.quat.clone([
                            Math.sin(e) * i[0],
                            Math.sin(e) * i[1],
                            Math.sin(e) * i[2],
                            Math.cos(e)
                          ])),
                          a.quat.multiply(t, n, t);
                      }
                    }
                  },
                  {
                    key: "_loop",
                    value: function() {
                      a.mat4.identity(this.m),
                        void 0 === this._targetQuat
                          ? (a.quat.set(
                              this.tempRotation,
                              this._rotation[0],
                              this._rotation[1],
                              this._rotation[2],
                              this._rotation[3]
                            ),
                            this._updateRotation(this.tempRotation))
                          : ((this._slerp += 0.1 * (0 - this._slerp)),
                            this._slerp < 5e-4
                              ? (a.quat.copy(this._rotation, this._targetQuat),
                                a.quat.copy(
                                  this.tempRotation,
                                  this._targetQuat
                                ),
                                (this._targetQuat = void 0),
                                this._diffX.setTo(0),
                                this._diffY.setTo(0),
                                (this._slerp = -1))
                              : (a.quat.set(this.tempRotation, 0, 0, 0, 0),
                                a.quat.slerp(
                                  this.tempRotation,
                                  this._targetQuat,
                                  this._rotation,
                                  this._slerp
                                ))),
                        a.vec3.transformQuat(
                          this._vZaxis,
                          this._vZaxis,
                          this.tempRotation
                        ),
                        a.mat4.fromQuat(this.matrix, this.tempRotation);
                    }
                  },
                  {
                    key: "easing",
                    set: function(t) {
                      (this._diffX.easing = t), (this._diffY.easing = t);
                    },
                    get: function() {
                      return this._diffX.easing;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = c;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = r(n(29)),
            s = r(n(11)),
            u = r(n(58)),
            c = (function(t) {
              function e(t, n) {
                var r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : window;
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var a = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return (
                  (a._mesh = t),
                  a._mesh.generateFaces(),
                  (a._camera = n),
                  (a.faceVertices = t.faces.map(function(t) {
                    return t.vertices;
                  })),
                  (a.clickTolerance = 8),
                  (a._ray = new s.default([0, 0, 0], [0, 0, -1])),
                  (a._hit = vec3.fromValues(-999, -999, -999)),
                  a._lastPos,
                  a._firstPos,
                  (a.mtxModel = mat4.create()),
                  (a._listenerTarget = i),
                  (a._skippingMove = r),
                  (a._onMoveBind = function(t) {
                    return a._onMove(t);
                  }),
                  (a._onDownBind = function(t) {
                    return a._onDown(t);
                  }),
                  (a._onUpBind = function() {
                    return a._onUp();
                  }),
                  a.connect(),
                  a
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "connect",
                    value: function() {
                      this._listenerTarget.addEventListener(
                        "mousedown",
                        this._onDownBind
                      ),
                        this._listenerTarget.addEventListener(
                          "mousemove",
                          this._onMoveBind
                        ),
                        this._listenerTarget.addEventListener(
                          "mouseup",
                          this._onUpBind
                        );
                    }
                  },
                  {
                    key: "disconnect",
                    value: function() {
                      this._listenerTarget.removeEventListener(
                        "mousedown",
                        this._onDownBind
                      ),
                        this._listenerTarget.removeEventListener(
                          "mousemove",
                          this._onMoveBind
                        ),
                        this._listenerTarget.removeEventListener(
                          "mouseup",
                          this._onUpBind
                        );
                    }
                  },
                  {
                    key: "_checkHit",
                    value: function() {
                      var t = this,
                        e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "onHit",
                        n = this._camera;
                      if (n) {
                        var r = (this._lastPos.x / a.default.width) * 2 - 1,
                          i = (-this._lastPos.y / a.default.height) * 2 + 1;
                        n.generateRay([r, i, 0], this._ray);
                        for (
                          var o = void 0,
                            s = vec3.create(),
                            u = vec3.create(),
                            c = vec3.create(),
                            l = 0,
                            h = function(e, n) {
                              vec3.transformMat4(n, e, t.mtxModel);
                            },
                            f = 0;
                          f < this.faceVertices.length;
                          f++
                        ) {
                          var d = this.faceVertices[f];
                          h(d[0], s), h(d[1], u), h(d[2], c);
                          var _ = this._ray.intersectTriangle(s, u, c);
                          if (_)
                            if (o) {
                              var p = vec3.dist(_, n.position);
                              p < l && ((o = vec3.clone(_)), (l = p));
                            } else
                              (o = vec3.clone(_)),
                                (l = vec3.dist(o, n.position));
                        }
                        o
                          ? ((this._hit = vec3.clone(o)),
                            this.dispatchCustomEvent(e, { hit: o }))
                          : this.dispatchCustomEvent("onUp");
                      }
                    }
                  },
                  {
                    key: "_onDown",
                    value: function(t) {
                      (this._firstPos = (0, u.default)(t)),
                        (this._lastPos = (0, u.default)(t)),
                        this._checkHit("onDown");
                    }
                  },
                  {
                    key: "_onMove",
                    value: function(t) {
                      (this._lastPos = (0, u.default)(t)),
                        this._skippingMove || this._checkHit();
                    }
                  },
                  {
                    key: "_onUp",
                    value: function() {
                      var t, e, n, r;
                      (t = this._firstPos),
                        (e = this._lastPos),
                        (n = t.x - e.x),
                        (r = t.y - e.y),
                        Math.sqrt(n * n + r * r) < this.clickTolerance &&
                          this._checkHit();
                    }
                  }
                ]),
                e
              );
            })(o.default);
          e.default = c;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function(t) {
              var e = void 0,
                n = void 0;
              return (
                t.touches
                  ? ((e = t.touches[0].pageX), (n = t.touches[0].pageY))
                  : ((e = t.clientX), (n = t.clientY)),
                { x: e, y: n }
              );
            });
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(13),
            o = (r = a) && r.__esModule ? r : { default: r },
            s = n(2),
            u = [
              [
                s.vec3.fromValues(0, 0, 0),
                s.vec3.fromValues(1, 0, 0),
                s.vec3.fromValues(0, -1, 0)
              ],
              [
                s.vec3.fromValues(0, 0, 0),
                s.vec3.fromValues(-1, 0, 0),
                s.vec3.fromValues(0, -1, 0)
              ],
              [
                s.vec3.fromValues(0, 0, 0),
                s.vec3.fromValues(0, 1, 0),
                s.vec3.fromValues(0, 0, 1)
              ],
              [
                s.vec3.fromValues(0, 0, 0),
                s.vec3.fromValues(0, -1, 0),
                s.vec3.fromValues(0, 0, -1)
              ],
              [
                s.vec3.fromValues(0, 0, 0),
                s.vec3.fromValues(0, 0, 1),
                s.vec3.fromValues(0, -1, 0)
              ],
              [
                s.vec3.fromValues(0, 0, 0),
                s.vec3.fromValues(0, 0, -1),
                s.vec3.fromValues(0, -1, 0)
              ]
            ],
            c = (function(t) {
              function e() {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var t = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.setPerspective(Math.PI / 2, 1, 0.1, 1e3), t;
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "face",
                    value: function(t) {
                      var e = u[t];
                      this.lookAt(e[0], e[1], e[2]);
                    }
                  }
                ]),
                e
              );
            })(o.default);
          e.default = c;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = function t(e, n, r) {
              null === e && (e = Function.prototype);
              var i = Object.getOwnPropertyDescriptor(e, n);
              if (void 0 === i) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, n, r);
              }
              if ("value" in i) return i.value;
              var o = i.get;
              return void 0 !== o ? o.call(r) : void 0;
            },
            o = r(n(14)),
            s = r(n(5)),
            u = (function(t) {
              function e() {
                return (
                  (function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "load",
                    value: function(t, n) {
                      var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 4;
                      (this._drawType = r),
                        a(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "load",
                          this
                        ).call(this, t, n);
                    }
                  },
                  {
                    key: "_onLoaded",
                    value: function() {
                      this.parseObj(this._req.response);
                    }
                  },
                  {
                    key: "parseObj",
                    value: function(t) {
                      function e(t) {
                        var e = parseInt(t);
                        return 3 * (e >= 0 ? e - 1 : e + f.length / 3);
                      }
                      function n(t) {
                        var e = parseInt(t);
                        return 3 * (e >= 0 ? e - 1 : e + d.length / 3);
                      }
                      function r(t) {
                        var e = parseInt(t);
                        return 2 * (e >= 0 ? e - 1 : e + _.length / 2);
                      }
                      function i(t, e, n) {
                        c.push([f[t], f[t + 1], f[t + 2]]),
                          c.push([f[e], f[e + 1], f[e + 2]]),
                          c.push([f[n], f[n + 1], f[n + 2]]),
                          p.push(3 * v + 0),
                          p.push(3 * v + 1),
                          p.push(3 * v + 2),
                          v++;
                      }
                      function a(t, e, n) {
                        l.push([_[t], _[t + 1]]),
                          l.push([_[e], _[e + 1]]),
                          l.push([_[n], _[n + 1]]);
                      }
                      function o(t, e, n) {
                        h.push([d[t], d[t + 1], d[t + 2]]),
                          h.push([d[e], d[e + 1], d[e + 2]]),
                          h.push([d[n], d[n + 1], d[n + 2]]);
                      }
                      function s(t, s, u, c, l, h, f, d, _, p, v, E) {
                        var m = e(t),
                          T = e(s),
                          b = e(u),
                          g = void 0;
                        void 0 === c
                          ? i(m, T, b)
                          : (i(m, T, (g = e(c))), i(T, b, g)),
                          void 0 !== l &&
                            ((m = r(l)),
                            (T = r(h)),
                            (b = r(f)),
                            void 0 === c
                              ? a(m, T, b)
                              : (a(m, T, (g = r(d))), a(T, b, g))),
                          void 0 !== _ &&
                            ((m = n(_)),
                            (T = n(p)),
                            (b = n(v)),
                            void 0 === c
                              ? o(m, T, b)
                              : (o(m, T, (g = n(E))), o(T, b, g)));
                      }
                      for (
                        var u = t.split("\n"),
                          c = [],
                          l = [],
                          h = [],
                          f = [],
                          d = [],
                          _ = [],
                          p = [],
                          v = 0,
                          E = void 0,
                          m = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,
                          T = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,
                          b = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,
                          g = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/,
                          y = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/,
                          R = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/,
                          M = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/,
                          A = 0;
                        A < u.length;
                        A++
                      ) {
                        var x = u[A];
                        0 !== (x = x.trim()).length &&
                          "#" !== x.charAt(0) &&
                          (null !== (E = m.exec(x))
                            ? f.push(
                                parseFloat(E[1]),
                                parseFloat(E[2]),
                                parseFloat(E[3])
                              )
                            : null !== (E = T.exec(x))
                            ? d.push(
                                parseFloat(E[1]),
                                parseFloat(E[2]),
                                parseFloat(E[3])
                              )
                            : null !== (E = b.exec(x))
                            ? _.push(parseFloat(E[1]), parseFloat(E[2]))
                            : null !== (E = g.exec(x))
                            ? s(E[1], E[2], E[3], E[4])
                            : null !== (E = y.exec(x))
                            ? s(
                                E[2],
                                E[5],
                                E[8],
                                E[11],
                                E[3],
                                E[6],
                                E[9],
                                E[12]
                              )
                            : null !== (E = R.exec(x))
                            ? s(
                                E[2],
                                E[6],
                                E[10],
                                E[14],
                                E[3],
                                E[7],
                                E[11],
                                E[15],
                                E[4],
                                E[8],
                                E[12],
                                E[16]
                              )
                            : null !== (E = M.exec(x)) &&
                              s(
                                E[2],
                                E[5],
                                E[8],
                                E[11],
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                E[3],
                                E[6],
                                E[9],
                                E[12]
                              ));
                      }
                      return this._generateMeshes({
                        positions: c,
                        coords: l,
                        normals: h,
                        indices: p
                      });
                    }
                  },
                  {
                    key: "_generateMeshes",
                    value: function(t) {
                      var e = t.normals.length > 0,
                        n = t.coords.length > 0,
                        r = void 0;
                      if (t.positions.length > 65535) {
                        var i = [],
                          a = 0,
                          o = {};
                        for (
                          o.positions = t.positions.concat(),
                            o.coords = t.coords.concat(),
                            o.indices = t.indices.concat(),
                            o.normals = t.normals.concat();
                          t.indices.length > 0;

                        ) {
                          for (
                            var u = Math.min(65535, t.positions.length),
                              c = t.indices.splice(0, u),
                              l = [],
                              h = [],
                              f = [],
                              d = void 0,
                              _ = 0,
                              p = 0;
                            p < c.length;
                            p++
                          )
                            c[p] > _ && (_ = c[p]),
                              (d = c[p]),
                              l.push(o.positions[d]),
                              n && h.push(o.coords[d]),
                              e && f.push(o.normals[d]),
                              (c[p] -= a);
                          (a = _ + 1),
                            (r = new s.default(this._drawType)).bufferVertex(l),
                            n && r.bufferTexCoord(h),
                            r.bufferIndex(c),
                            e && r.bufferNormal(f),
                            i.push(r);
                        }
                        return this._callback && this._callback(i, o), i;
                      }
                      return (
                        (r = new s.default(this._drawType)).bufferVertex(
                          t.positions
                        ),
                        n && r.bufferTexCoord(t.coords),
                        r.bufferIndex(t.indices),
                        e && r.bufferNormal(t.normals),
                        this._callback && this._callback(r, t),
                        r
                      );
                    }
                  }
                ]),
                e
              );
            })(o.default);
          (u.parse = function(t) {
            return new u().parseObj(t);
          }),
            (e.default = u);
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(14)),
            o = r(n(62)),
            s = (function(t) {
              function e() {
                return (
                  (function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, !0)
                  )
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "parse",
                    value: function(t) {
                      return (0, o.default)(t);
                    }
                  },
                  {
                    key: "_onLoaded",
                    value: function() {
                      var t = this.parse(this._req.response);
                      this._callback && this._callback(t);
                    }
                  }
                ]),
                e
              );
            })(a.default);
          (s.parse = function(t) {
            return (0, o.default)(t);
          }),
            (e.default = s);
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = "#\\?RADIANCE",
            i = "#.*",
            a = "EXPOSURE=\\s*([0-9]*[.][0-9]*)",
            o = "FORMAT=32-bit_rle_rgbe",
            s = "-Y ([0-9]+) \\+X ([0-9]+)";
          e.default = function(t) {
            t instanceof ArrayBuffer && (t = new Uint8Array(t));
            for (
              var e = 0, n = t.length, u = 0, c = 0, l = 1, h = !1, f = 0;
              f < 20;
              f++
            ) {
              var d = (function() {
                  var r = "";
                  do {
                    var i = t[e];
                    if (10 === i) {
                      ++e;
                      break;
                    }
                    r += String.fromCharCode(i);
                  } while (++e < n);
                  return r;
                })(),
                _ = void 0;
              if ((_ = d.match(r)));
              else if ((_ = d.match(o))) h = !0;
              else if ((_ = d.match(a))) l = Number(_[1]);
              else if ((_ = d.match(i)));
              else if ((_ = d.match(s))) {
                (c = Number(_[1])), (u = Number(_[2]));
                break;
              }
            }
            if (!h) throw new Error("File is not run length encoded!");
            var p = new Uint8Array(u * c * 4);
            !(function(t, e, n, r, i, a) {
              function o(e) {
                var n = 0;
                do {
                  e[n++] = t[r];
                } while (++r < _ && n < e.length);
                return n;
              }
              function s(e, n, i) {
                var a = 0;
                do {
                  e[n + a++] = t[r];
                } while (++r < _ && a < i);
                return a;
              }
              for (
                var u = new Array(4),
                  c = null,
                  l = void 0,
                  h = void 0,
                  f = void 0,
                  d = new Array(2),
                  _ = t.length;
                a > 0;

              ) {
                if (o(u) < u.length)
                  throw new Error("Error reading bytes: expected " + u.length);
                if (2 !== u[0] || 2 !== u[1] || 0 != (128 & u[2]))
                  return (
                    (e[n++] = u[0]),
                    (e[n++] = u[1]),
                    (e[n++] = u[2]),
                    (e[n++] = u[3]),
                    void (function(t, e, n, r) {
                      var i = 4 * r,
                        a = s(e, n, i);
                      if (a < i)
                        throw new Error(
                          "Error reading raw pixels: got " +
                            a +
                            " bytes, expected " +
                            i
                        );
                    })(0, e, n, i * a - 1)
                  );
                if ((((255 & u[2]) << 8) | (255 & u[3])) !== i)
                  throw new Error(
                    "Wrong scanline width " +
                      (((255 & u[2]) << 8) | (255 & u[3])) +
                      ", expected " +
                      i
                  );
                null === c && (c = new Array(4 * i)), (l = 0);
                for (var p = 0; p < 4; p++)
                  for (h = (p + 1) * i; l < h; ) {
                    if (o(d) < d.length)
                      throw new Error("Error reading 2-byte buffer");
                    if ((255 & d[0]) > 128) {
                      if (0 == (f = (255 & d[0]) - 128) || f > h - l)
                        throw new Error("Bad scanline data");
                      for (; f-- > 0; ) c[l++] = d[1];
                    } else {
                      if (0 == (f = 255 & d[0]) || f > h - l)
                        throw new Error("Bad scanline data");
                      if (((c[l++] = d[1]), --f > 0)) {
                        if (s(c, l, f) < f)
                          throw new Error("Error reading non-run data");
                        l += f;
                      }
                    }
                  }
                for (var v = 0; v < i; v++)
                  (e[n + 0] = c[v]),
                    (e[n + 1] = c[v + i]),
                    (e[n + 2] = c[v + 2 * i]),
                    (e[n + 3] = c[v + 3 * i]),
                    (n += 4);
                a--;
              }
            })(t, p, 0, e, u, c);
            for (
              var v = new Float32Array(u * c * 4), E = 0;
              E < p.length;
              E += 4
            ) {
              var m = p[E + 0] / 255,
                T = p[E + 1] / 255,
                b = p[E + 2] / 255,
                g = p[E + 3],
                y = Math.pow(2, g - 128);
              (m *= y), (T *= y), (b *= y);
              var R = E;
              (v[R + 0] = m), (v[R + 1] = T), (v[R + 2] = b), (v[R + 3] = 1);
            }
            return { shape: [u, c], exposure: l, gamma: 1, data: v };
          };
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = n(5),
            a = (r = i) && r.__esModule ? r : { default: r },
            o = {
              5120: Int8Array,
              5121: Uint8Array,
              5122: Int16Array,
              5123: Uint16Array,
              5125: Uint32Array,
              5126: Float32Array
            },
            s = {
              SCALAR: 1,
              VEC2: 2,
              VEC3: 3,
              VEC4: 4,
              MAT2: 4,
              MAT3: 9,
              MAT4: 16
            },
            u = {
              NORMAL: "aNormal",
              POSITION: "aVertexPosition",
              TEXCOORD_0: "aTextureCoord",
              WEIGHTS_0: "aWeight",
              JOINTS_0: "aJoint",
              COLOR: "aColor"
            },
            c = function(t, e) {
              return new Promise(function(n, r) {
                var i = t.bufferViews;
                t.buffers,
                  i.forEach(function(t, n) {
                    var r = e;
                    t.data = r.slice(
                      t.byteOffset || 0,
                      (t.byteOffset || 0) + (t.byteLength || 0)
                    );
                  }),
                  n(t);
              });
            },
            l = function(t) {
              return new Promise(function(e, n) {
                var r = t.meshes;
                (t.geometries = []),
                  r.forEach(function(e, n) {
                    var r = e.primitives,
                      i = {};
                    r.forEach(function(e, n) {
                      var r = Object.keys(e.attributes),
                        o = {};
                      if (
                        (r.forEach(function(n, r) {
                          var a = e.attributes[n],
                            c = t.accessors[a],
                            l = u[n];
                          if (l) {
                            "NORMAL" === n && (o.HAS_NORMALS = 1),
                              n.indexOf("TEXCOORD") > -1 && (o.HAS_UV = 1);
                            var f = s[c.type],
                              d = h(t, a);
                            d instanceof Uint32Array &&
                              (d = new Float32Array(d)),
                              "TEXCOORD_1" === n && console.log(f, d),
                              (i[l] = { value: d, size: f });
                          }
                        }),
                        null != e.indices)
                      ) {
                        var c = h(t, e.indices, !0);
                        i.indices = { value: c, size: 1 };
                      }
                      var l = new a.default();
                      for (var f in i) {
                        var d = i[f];
                        "indices" !== f
                          ? l.bufferFlattenData(d.value, f, d.size)
                          : l.bufferIndex(d.value);
                      }
                      if ((t.output.meshes.push(l), e.material)) {
                        console.log("gltf.output", t.output, e.material);
                        var _ = t.output.materials[e.material];
                        (l.material = _),
                          (o = objectAssign(o, l.material.defines)),
                          (l.defines = o);
                        var p = Shaders.get(
                            ShaderLibs.gltfVert,
                            ShaderLibs.gltfFrag,
                            o
                          ),
                          v = _.emissiveFacotr,
                          E = _.normalTexture,
                          m = _.occlusionTexture,
                          T = _.pbrMetallicRoughness,
                          b = T.baseColorTexture,
                          g = T.metallicRoughnessTexture,
                          y = {
                            uEmissiveFactor: v || [0, 0, 0],
                            uBaseColor: T.baseColorFactor || [1, 1, 1, 1],
                            uRoughness: T.roughnessFactor || 1,
                            uMetallic: T.metallicFactor || 1,
                            uScaleDiffBaseMR: [0, 0, 0, 0],
                            uScaleFGDSpec: [0, 0, 0, 0],
                            uScaleIBLAmbient: [1, 1, 1, 1],
                            uLightDirection: [1, 1, 1],
                            uLightColor: [1, 1, 1],
                            uGamma: 1
                          };
                        b && (y.uColorMap = b.glTexture),
                          g && (y.uMetallicRoughnessMap = g.glTexture),
                          E &&
                            ((y.uNormalScale = E.scale || 1),
                            (y.uNormalMap = E.glTexture)),
                          m &&
                            ((y.uAoMap = m.glTexture),
                            (y.uOcclusionStrength = m.strength || 1)),
                          p.bind(),
                          p.uniform(y),
                          (l.material.shader = p),
                          (l.material.uniforms = y);
                      }
                      t.geometries.push(i);
                    });
                  }),
                  e(t);
              });
            },
            h = function(t, e) {
              var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = t.accessors[e],
                i = t.bufferViews[r.bufferView].data,
                a = r.byteOffset || 0,
                u = o[r.componentType] || Float32Array,
                c = s[r.type];
              null == c && n && (c = 1);
              var l = new u(i, a, c * r.count),
                h = r.extensions && r.extensions.WEB3D_quantized_attributes;
              if (h) {
                for (
                  var f = new Float32Array(c * r.count),
                    d = h.decodeMatrix,
                    _ = new Array(c),
                    p = new Array(c),
                    v = 0;
                  v < c;
                  v++
                )
                  (_[v] = d[c * (c + 1) + v]), (p[v] = d[v * (c + 1) + v]);
                for (var E = 0; E < r.count; E++)
                  for (var m = 0; m < c; m++)
                    f[E * c + m] = l[E * c + m] * p[m] + _[m];
                l = f;
              }
              return l;
            };
          e.default = {
            parse: function(t, e) {
              return new Promise(function(n, r) {
                (t.output = { meshes: [], scenes: [], textures: [] }),
                  c(t, e)
                    .then(l)
                    .then(function(t) {
                      n(t);
                    })
                    .catch(function(t) {
                      console.log("Error:", t);
                    });
              });
            }
          };
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(7)),
            o = r(n(1)),
            s = r(n(6)),
            u = r(n(15)),
            c = r(n(16)),
            l = (function(t) {
              function e() {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var t = a.default.bigTriangle(),
                  n = new o.default(u.default, c.default),
                  r = (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                  );
                return n.bind(), n.uniform("texture", "uniform1i", 0), r;
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "draw",
                    value: function(t) {
                      this.shader.bind(),
                        t.bind(0),
                        (function t(e, n, r) {
                          null === e && (e = Function.prototype);
                          var i = Object.getOwnPropertyDescriptor(e, n);
                          if (void 0 === i) {
                            var a = Object.getPrototypeOf(e);
                            return null === a ? void 0 : t(a, n, r);
                          }
                          if ("value" in i) return i.value;
                          var o = i.get;
                          return void 0 !== o ? o.call(r) : void 0;
                        })(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "draw",
                          this
                        ).call(this);
                    }
                  }
                ]),
                e
              );
            })(s.default);
          e.default = l;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(n(0)),
            a = r(n(5)),
            o = r(n(1)),
            s = r(n(6)),
            u = r(n(66)),
            c = r(n(67)),
            l = (function(t) {
              function e() {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var t = [],
                  n = [],
                  r = 9999;
                t.push([-r, 0, 0]),
                  t.push([r, 0, 0]),
                  t.push([0, -r, 0]),
                  t.push([0, r, 0]),
                  t.push([0, 0, -r]),
                  t.push([0, 0, r]),
                  n.push([1, 0, 0]),
                  n.push([1, 0, 0]),
                  n.push([0, 1, 0]),
                  n.push([0, 1, 0]),
                  n.push([0, 0, 1]),
                  n.push([0, 0, 1]);
                var s = new a.default(i.default.LINES);
                s.bufferVertex(t),
                  s.bufferIndex([0, 1, 2, 3, 4, 5]),
                  s.bufferData(n, "aColor", 3);
                var l = new o.default(u.default, c.default);
                return (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(this, s, l)
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                e
              );
            })(s.default);
          e.default = l;
        },
        function(t, e) {
          t.exports =
            "// axis.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vColor = aColor;\n    vNormal = aNormal;\n}";
        },
        function(t, e) {
          t.exports =
            "// axis.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\t// vec3 color = vNormal;\n\tvec3 color = vColor + vNormal * 0.0001;\n    gl_FragColor = vec4(color, 1.0);\n}";
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = function t(e, n, r) {
              null === e && (e = Function.prototype);
              var i = Object.getOwnPropertyDescriptor(e, n);
              if (void 0 === i) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, n, r);
              }
              if ("value" in i) return i.value;
              var o = i.get;
              return void 0 !== o ? o.call(r) : void 0;
            },
            o = r(n(7)),
            s = r(n(1)),
            u = r(n(6)),
            c = r(n(33)),
            l = r(n(17)),
            h = (function(t) {
              function e() {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var t = o.default.sphere(1, 24),
                  n = new s.default(c.default, l.default);
                return (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "draw",
                    value: function() {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [0, 0, 0],
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : [1, 1, 1],
                        r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : [1, 1, 1],
                        i =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 1;
                      this.shader.bind(),
                        this.shader.uniform("position", "uniform3fv", t),
                        this.shader.uniform("scale", "uniform3fv", n),
                        this.shader.uniform("color", "uniform3fv", r),
                        this.shader.uniform("opacity", "uniform1f", i),
                        a(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "draw",
                          this
                        ).call(this);
                    }
                  }
                ]),
                e
              );
            })(u.default);
          e.default = h;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = r(n(5)),
            s = r(n(1)),
            u = r(n(6)),
            c = r(n(70)),
            l = r(n(71)),
            h = (function(t) {
              function e() {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var t = [],
                  n = [],
                  r = 0,
                  i = void 0,
                  u = void 0;
                for (i = -100; i < 100; i += 1)
                  for (u = -100; u < 100; u += 1)
                    t.push([i, u, 0]),
                      n.push(r),
                      r++,
                      t.push([i, 0, u]),
                      n.push(r),
                      r++;
                var h = new o.default(a.default.POINTS);
                h.bufferVertex(t), h.bufferIndex(n);
                var f = new s.default(c.default, l.default),
                  d = (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, h, f)
                  );
                return (d.color = [1, 1, 1]), (d.opacity = 0.65), d;
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "draw",
                    value: function() {
                      this.shader.bind(),
                        this.shader.uniform("color", "uniform3fv", this.color),
                        this.shader.uniform(
                          "opacity",
                          "uniform1f",
                          this.opacity
                        ),
                        this.shader.uniform("viewport", "vec2", [
                          a.default.width,
                          a.default.height
                        ]),
                        (function t(e, n, r) {
                          null === e && (e = Function.prototype);
                          var i = Object.getOwnPropertyDescriptor(e, n);
                          if (void 0 === i) {
                            var a = Object.getPrototypeOf(e);
                            return null === a ? void 0 : t(a, n, r);
                          }
                          if ("value" in i) return i.value;
                          var o = i.get;
                          return void 0 !== o ? o.call(r) : void 0;
                        })(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "draw",
                          this
                        ).call(this);
                    }
                  }
                ]),
                e
              );
            })(u.default);
          e.default = h;
        },
        function(t, e) {
          t.exports =
            "// basic.vert\n\n#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 viewport;\n\nvarying vec3 vNormal;\n\nconst float radius = 0.008;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition + aNormal * 0.000001, 1.0);\n    // gl_PointSize = 1.0;\n    vNormal = aNormal;\n\n\tfloat distOffset = viewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;\n    gl_PointSize = distOffset;\n}";
        },
        function(t, e) {
          t.exports =
            "// dotsPlane.frag\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n\tif(distance(gl_PointCoord, vec2(.5)) > .5) {\n\t\tdiscard;\n\t}\n    gl_FragColor = vec4(color, opacity);\n}";
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = function t(e, n, r) {
              null === e && (e = Function.prototype);
              var i = Object.getOwnPropertyDescriptor(e, n);
              if (void 0 === i) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, n, r);
              }
              if ("value" in i) return i.value;
              var o = i.get;
              return void 0 !== o ? o.call(r) : void 0;
            },
            o = r(n(0)),
            s = r(n(5)),
            u = r(n(1)),
            c = r(n(6)),
            l = n(9),
            h = n(17),
            f = (function(t) {
              function e() {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var t = [];
                t.push([0, 0, 0]), t.push([0, 0, 0]);
                var n = new s.default(o.default.LINES);
                n.bufferVertex(t),
                  n.bufferTexCoord([
                    [0, 0],
                    [1, 1]
                  ]),
                  n.bufferIndex([0, 1]);
                var r = new u.default(l, h);
                return (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r)
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "draw",
                    value: function(t, n) {
                      var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : [1, 1, 1],
                        i =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 1;
                      this._mesh.bufferVertex([t, n]),
                        this._shader.bind(),
                        this._shader.uniform("color", "vec3", r),
                        this._shader.uniform("opacity", "float", i),
                        a(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "draw",
                          this
                        ).call(this);
                    }
                  }
                ]),
                e
              );
            })(c.default);
          e.default = f;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(7)),
            o = r(n(1)),
            s = r(n(6)),
            u = n(34),
            c = n(35),
            l = (function(t) {
              function e() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 20;
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var n = a.default.skybox(t),
                  r = new o.default(u, c);
                return (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r)
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "draw",
                    value: function(t) {
                      this.shader.bind(),
                        t.bind(0),
                        (function t(e, n, r) {
                          null === e && (e = Function.prototype);
                          var i = Object.getOwnPropertyDescriptor(e, n);
                          if (void 0 === i) {
                            var a = Object.getPrototypeOf(e);
                            return null === a ? void 0 : t(a, n, r);
                          }
                          if ("value" in i) return i.value;
                          var o = i.get;
                          return void 0 !== o ? o.call(r) : void 0;
                        })(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "draw",
                          this
                        ).call(this);
                    }
                  }
                ]),
                e
              );
            })(s.default);
          e.default = l;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(7)),
            o = r(n(1)),
            s = r(n(6)),
            u = n(75),
            c = n(16),
            l = (function(t) {
              function e() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 50,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 24;
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var r = a.default.sphere(t, n, !0),
                  i = new o.default(u, c);
                return (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, i)
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "draw",
                    value: function(t) {
                      this.shader.bind(),
                        t.bind(0),
                        (function t(e, n, r) {
                          null === e && (e = Function.prototype);
                          var i = Object.getOwnPropertyDescriptor(e, n);
                          if (void 0 === i) {
                            var a = Object.getPrototypeOf(e);
                            return null === a ? void 0 : t(a, n, r);
                          }
                          if ("value" in i) return i.value;
                          var o = i.get;
                          return void 0 !== o ? o.call(r) : void 0;
                        })(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "draw",
                          this
                        ).call(this);
                    }
                  }
                ]),
                e
              );
            })(s.default);
          e.default = l;
        },
        function(t, e) {
          t.exports =
            "// sky.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n    gl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}";
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = r(n(7)),
            s = r(n(1)),
            u = r(n(6)),
            c = n(15),
            l = n(77),
            h = (function(t) {
              function e() {
                !(function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var t = o.default.bigTriangle(),
                  n = new s.default(c, l),
                  r = (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                  );
                return n.bind(), n.uniform("texture", "uniform1i", 0), r;
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                i(e, [
                  {
                    key: "draw",
                    value: function(t) {
                      this.shader.bind(),
                        t.bind(0),
                        this.shader.uniform("uResolution", "vec2", [
                          1 / a.default.width,
                          1 / a.default.height
                        ]),
                        (function t(e, n, r) {
                          null === e && (e = Function.prototype);
                          var i = Object.getOwnPropertyDescriptor(e, n);
                          if (void 0 === i) {
                            var a = Object.getPrototypeOf(e);
                            return null === a ? void 0 : t(a, n, r);
                          }
                          if ("value" in i) return i.value;
                          var o = i.get;
                          return void 0 !== o ? o.call(r) : void 0;
                        })(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "draw",
                          this
                        ).call(this);
                    }
                  }
                ]),
                e
              );
            })(u.default);
          e.default = h;
        },
        function(t, e) {
          t.exports =
            "// fxaa.frag\n\n#define SHADER_NAME FXAA\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform vec2 uResolution;\n\n\nfloat FXAA_SUBPIX_SHIFT = 1.0/4.0;\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\n\n\nvec4 applyFXAA(sampler2D tex) {\n    vec4 color;\n    vec2 fragCoord = gl_FragCoord.xy;\n    vec3 rgbNW = texture2D(tex, (fragCoord + vec2(-1.0, -1.0)) * uResolution).xyz;\n    vec3 rgbNE = texture2D(tex, (fragCoord + vec2(1.0, -1.0)) * uResolution).xyz;\n    vec3 rgbSW = texture2D(tex, (fragCoord + vec2(-1.0, 1.0)) * uResolution).xyz;\n    vec3 rgbSE = texture2D(tex, (fragCoord + vec2(1.0, 1.0)) * uResolution).xyz;\n    vec3 rgbM  = texture2D(tex, fragCoord  * uResolution).xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * uResolution;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * uResolution + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * uResolution + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * uResolution + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * uResolution + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, 1.0);\n    else\n        color = vec4(rgbB, 1.0);\n    return color;\n}\n\nvoid main(void) {\n \tvec4 color = applyFXAA(texture);\n    gl_FragColor = color;\n}";
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(4)),
            o = r(n(0)),
            s = r(n(13)),
            u = r(n(31)),
            c = r(n(30)),
            l = (function() {
              function t() {
                var e = this;
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._children = []),
                  (this._matrixIdentity = mat4.create()),
                  o.default.enableAlphaBlending(),
                  this._init(),
                  this._initTextures(),
                  this._initViews(),
                  (this._efIndex = a.default.addEF(function() {
                    return e._loop();
                  })),
                  window.addEventListener("resize", function() {
                    return e.resize();
                  });
              }
              return (
                i(t, [
                  { key: "update", value: function() {} },
                  { key: "render", value: function() {} },
                  {
                    key: "stop",
                    value: function() {
                      -1 !== this._efIndex &&
                        (this._efIndex = a.default.removeEF(this._efIndex));
                    }
                  },
                  {
                    key: "start",
                    value: function() {
                      var t = this;
                      -1 === this._efIndex &&
                        (this._efIndex = a.default.addEF(function() {
                          return t._loop();
                        }));
                    }
                  },
                  {
                    key: "resize",
                    value: function() {
                      o.default.setSize(window.innerWidth, window.innerHeight),
                        this.camera.setAspectRatio(o.default.aspectRatio);
                    }
                  },
                  {
                    key: "addChild",
                    value: function(t) {
                      this._children.push(t);
                    }
                  },
                  {
                    key: "removeChild",
                    value: function(t) {
                      var e = this._children.indexOf(t);
                      -1 != e
                        ? this._children.splice(e, 1)
                        : console.warn("Child no exist");
                    }
                  },
                  { key: "_initTextures", value: function() {} },
                  { key: "_initViews", value: function() {} },
                  {
                    key: "_renderChildren",
                    value: function() {
                      for (var t = 0; t < this._children.length; t++)
                        this._children[t].toRender();
                      o.default.rotate(this._matrixIdentity);
                    }
                  },
                  {
                    key: "_init",
                    value: function() {
                      (this.camera = new s.default()),
                        this.camera.setPerspective(
                          (45 * Math.PI) / 180,
                          o.default.aspectRatio,
                          0.1,
                          100
                        ),
                        (this.orbitalControl = new c.default(
                          this.camera,
                          window,
                          15
                        )),
                        (this.orbitalControl.radius.value = 10),
                        (this.cameraOrtho = new u.default());
                    }
                  },
                  {
                    key: "_loop",
                    value: function() {
                      o.default.viewport(
                        0,
                        0,
                        o.default.width,
                        o.default.height
                      ),
                        o.default.setMatrices(this.camera),
                        this.update(),
                        this._renderChildren(),
                        this.render();
                    }
                  }
                ]),
                t
              );
            })();
          e.default = l;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = n(1),
            o = (r = a) && r.__esModule ? r : { default: r },
            s = (function() {
              function t(e, n) {
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this.shader = new o.default(e, n)),
                  this._init();
              }
              return (
                i(t, [
                  { key: "_init", value: function() {} },
                  { key: "render", value: function() {} }
                ]),
                t
              );
            })();
          e.default = s;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(32)),
            o = r(n(1)),
            s =
              (r(n(0)),
              (function(t) {
                function e(t, n) {
                  !(function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                  var r = (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                  );
                  return (
                    (r._children = []),
                    (r.shader = new o.default(t, n)),
                    r._init(),
                    r
                  );
                }
                return (
                  (function(t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof e
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                      }
                    })),
                      e &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(t, e)
                          : (t.__proto__ = e));
                  })(e, t),
                  i(e, [
                    { key: "_init", value: function() {} },
                    { key: "render", value: function() {} }
                  ]),
                  e
                );
              })(a.default));
          e.default = s;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            a = r(n(0)),
            o = r(n(5)),
            s = r(n(1)),
            u = (function() {
              function t() {
                return (
                  (function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (this._uniforms = {}),
                  (this._uniformTextures = []),
                  this._fbo,
                  (this._clearColor = { r: 0, g: 0, b: 0, a: 0 }),
                  this
                );
              }
              return (
                i(t, [
                  {
                    key: "setClearColor",
                    value: function() {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                        r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0;
                      return (
                        (this._clearColor.r = t),
                        (this._clearColor.g = e),
                        (this._clearColor.b = n),
                        (this._clearColor.a = r),
                        this
                      );
                    }
                  },
                  {
                    key: "useProgram",
                    value: function(t, e) {
                      return (
                        t instanceof s.default
                          ? (this._shader = t)
                          : (this._shader = new s.default(t, e)),
                        this
                      );
                    }
                  },
                  {
                    key: "setMesh",
                    value: function(t) {
                      return (this._mesh = t), this;
                    }
                  },
                  {
                    key: "createMesh",
                    value: function(t) {
                      return (this._mesh = new o.default(t)), this;
                    }
                  },
                  {
                    key: "bufferVertex",
                    value: function(t) {
                      return (
                        this._mesh || (this._mesh = new o.default()),
                        this._mesh.bufferVertex(t),
                        this
                      );
                    }
                  },
                  {
                    key: "bufferTexCoord",
                    value: function(t) {
                      return (
                        this._mesh || (this._mesh = new o.default()),
                        this._mesh.bufferTexCoord(t),
                        this
                      );
                    }
                  },
                  {
                    key: "bufferNormal",
                    value: function(t) {
                      return (
                        this._mesh || (this._mesh = new o.default()),
                        this._mesh.bufferNormal(t),
                        this
                      );
                    }
                  },
                  {
                    key: "bufferIndex",
                    value: function(t) {
                      return (
                        this._mesh || (this._mesh = new o.default()),
                        this._mesh.bufferIndex(t),
                        this
                      );
                    }
                  },
                  {
                    key: "bufferInstance",
                    value: function(t, e) {
                      return this._mesh
                        ? (this._mesh.bufferInstance(t, e), this)
                        : (console.warn("Need to create mesh first"), this);
                    }
                  },
                  {
                    key: "bufferData",
                    value: function(t, e) {
                      return (
                        this._mesh || (this._mesh = new o.default()),
                        this._mesh.bufferData(t, e),
                        this
                      );
                    }
                  },
                  {
                    key: "uniform",
                    value: function(t, e, n) {
                      return (this._uniforms[t] = { type: e, value: n }), this;
                    }
                  },
                  {
                    key: "uniformTexture",
                    value: function(t, e, n) {
                      return (
                        void 0 !== n
                          ? (this._uniformTextures[n] = { name: t, texture: e })
                          : this._uniformTextures.push({ name: t, texture: e }),
                        this
                      );
                    }
                  },
                  {
                    key: "bindFrameBuffer",
                    value: function(t) {
                      return (this._fbo = t), this;
                    }
                  },
                  {
                    key: "draw",
                    value: function() {
                      var t = this;
                      if (this._shader && this._mesh) {
                        if (this._fbo) {
                          var e = this._clearColor,
                            n = e.r,
                            r = e.g,
                            i = e.b,
                            o = e.a;
                          this._fbo.bind(), a.default.clear(n, r, i, o);
                        }
                        for (var s in (this._shader.bind(), this._uniforms)) {
                          var u = this._uniforms[s];
                          this._shader.uniform(s, u.type, u.value);
                        }
                        return (
                          this._uniformTextures.forEach(function(e, n) {
                            void 0 !== e &&
                              (t._shader.uniform(e.name, "uniform1i", n),
                              e.texture.bind(n));
                          }),
                          a.default.draw(this._mesh),
                          this._fbo && this._fbo.unbind(),
                          this
                        );
                      }
                    }
                  },
                  {
                    key: "shader",
                    get: function() {
                      return this._shader;
                    }
                  },
                  {
                    key: "framebuffer",
                    get: function() {
                      return this._fbo;
                    }
                  }
                ]),
                t
              );
            })();
          e.default = u;
        },
        function(t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(n(17)),
            a = r(n(15)),
            o = r(n(33)),
            s = r(n(16)),
            u = r(n(9)),
            c = r(n(34)),
            l = r(n(35)),
            h = {
              simpleColorFrag: i.default,
              bigTriangleVert: a.default,
              generalVert: o.default,
              copyFrag: s.default,
              basicVert: u.default,
              skyboxVert: c.default,
              skyboxFrag: l.default
            };
          e.default = h;
        },
        function(t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r,
            i = n(36),
            a = (function(t) {
              function e(t, n) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 1;
                return (
                  (function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  (function(t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(
                      this,
                      2,
                      t,
                      n,
                      r,
                      i
                    )
                  )
                );
              }
              return (
                (function(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                e
              );
            })(((r = i) && r.__esModule ? r : { default: r }).default);
          e.default = a;
        }
      ]));
  },
  function(t, e) {
    var n = function(t, e) {
        return void 0 === e && (e = 0), t + Math.random() * (e - t);
      },
      r = function(t, e) {
        return Math.floor(n(t, e));
      },
      i = {
        random: n,
        randomFloor: r,
        randomGaussian: function(t) {
          void 0 === t && (t = 6);
          for (var e = 0, n = 0; n < t; n += 1) e += Math.random();
          return e / t;
        },
        map: function(t, e, n, r, i) {
          return r + (i - r) * ((t - e) / (n - e));
        },
        getRandomElement: function(t) {
          return t[r(t.length)];
        }
      };
    t.exports = i;
  },
  function(t, e, n) {
    "use strict";
    var r,
      i = "object" == typeof Reflect ? Reflect : null,
      a =
        i && "function" == typeof i.apply
          ? i.apply
          : function(t, e, n) {
              return Function.prototype.apply.call(t, e, n);
            };
    r =
      i && "function" == typeof i.ownKeys
        ? i.ownKeys
        : Object.getOwnPropertySymbols
        ? function(t) {
            return Object.getOwnPropertyNames(t).concat(
              Object.getOwnPropertySymbols(t)
            );
          }
        : function(t) {
            return Object.getOwnPropertyNames(t);
          };
    var o =
      Number.isNaN ||
      function(t) {
        return t != t;
      };
    function s() {
      s.init.call(this);
    }
    (t.exports = s),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0);
    var u = 10;
    function c(t) {
      return void 0 === t._maxListeners
        ? s.defaultMaxListeners
        : t._maxListeners;
    }
    function l(t, e, n, r) {
      var i, a, o, s;
      if ("function" != typeof n)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof n
        );
      if (
        (void 0 === (a = t._events)
          ? ((a = t._events = Object.create(null)), (t._eventsCount = 0))
          : (void 0 !== a.newListener &&
              (t.emit("newListener", e, n.listener ? n.listener : n),
              (a = t._events)),
            (o = a[e])),
        void 0 === o)
      )
        (o = a[e] = n), ++t._eventsCount;
      else if (
        ("function" == typeof o
          ? (o = a[e] = r ? [n, o] : [o, n])
          : r
          ? o.unshift(n)
          : o.push(n),
        (i = c(t)) > 0 && o.length > i && !o.warned)
      ) {
        o.warned = !0;
        var u = new Error(
          "Possible EventEmitter memory leak detected. " +
            o.length +
            " " +
            String(e) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (u.name = "MaxListenersExceededWarning"),
          (u.emitter = t),
          (u.type = e),
          (u.count = o.length),
          (s = u),
          console && console.warn && console.warn(s);
      }
      return t;
    }
    function h() {
      for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
      this.fired ||
        (this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        a(this.listener, this.target, t));
    }
    function f(t, e, n) {
      var r = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n },
        i = h.bind(r);
      return (i.listener = n), (r.wrapFn = i), i;
    }
    function d(t, e, n) {
      var r = t._events;
      if (void 0 === r) return [];
      var i = r[e];
      return void 0 === i
        ? []
        : "function" == typeof i
        ? n
          ? [i.listener || i]
          : [i]
        : n
        ? (function(t) {
            for (var e = new Array(t.length), n = 0; n < e.length; ++n)
              e[n] = t[n].listener || t[n];
            return e;
          })(i)
        : p(i, i.length);
    }
    function _(t) {
      var e = this._events;
      if (void 0 !== e) {
        var n = e[t];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function p(t, e) {
      for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
      return n;
    }
    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return u;
      },
      set: function(t) {
        if ("number" != typeof t || t < 0 || o(t))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              t +
              "."
          );
        u = t;
      }
    }),
      (s.init = function() {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (s.prototype.setMaxListeners = function(t) {
        if ("number" != typeof t || t < 0 || o(t))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              t +
              "."
          );
        return (this._maxListeners = t), this;
      }),
      (s.prototype.getMaxListeners = function() {
        return c(this);
      }),
      (s.prototype.emit = function(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
        var r = "error" === t,
          i = this._events;
        if (void 0 !== i) r = r && void 0 === i.error;
        else if (!r) return !1;
        if (r) {
          var o;
          if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
          var s = new Error(
            "Unhandled error." + (o ? " (" + o.message + ")" : "")
          );
          throw ((s.context = o), s);
        }
        var u = i[t];
        if (void 0 === u) return !1;
        if ("function" == typeof u) a(u, this, e);
        else {
          var c = u.length,
            l = p(u, c);
          for (n = 0; n < c; ++n) a(l[n], this, e);
        }
        return !0;
      }),
      (s.prototype.addListener = function(t, e) {
        return l(this, t, e, !1);
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function(t, e) {
        return l(this, t, e, !0);
      }),
      (s.prototype.once = function(t, e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
        return this.on(t, f(this, t, e)), this;
      }),
      (s.prototype.prependOnceListener = function(t, e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
        return this.prependListener(t, f(this, t, e)), this;
      }),
      (s.prototype.removeListener = function(t, e) {
        var n, r, i, a, o;
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
        if (void 0 === (r = this._events)) return this;
        if (void 0 === (n = r[t])) return this;
        if (n === e || n.listener === e)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete r[t],
              r.removeListener &&
                this.emit("removeListener", t, n.listener || e));
        else if ("function" != typeof n) {
          for (i = -1, a = n.length - 1; a >= 0; a--)
            if (n[a] === e || n[a].listener === e) {
              (o = n[a].listener), (i = a);
              break;
            }
          if (i < 0) return this;
          0 === i
            ? n.shift()
            : (function(t, e) {
                for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                t.pop();
              })(n, i),
            1 === n.length && (r[t] = n[0]),
            void 0 !== r.removeListener &&
              this.emit("removeListener", t, o || e);
        }
        return this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function(t) {
        var e, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== n[t] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete n[t]),
            this
          );
        if (0 === arguments.length) {
          var i,
            a = Object.keys(n);
          for (r = 0; r < a.length; ++r)
            "removeListener" !== (i = a[r]) && this.removeAllListeners(i);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (e = n[t])) this.removeListener(t, e);
        else if (void 0 !== e)
          for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
        return this;
      }),
      (s.prototype.listeners = function(t) {
        return d(this, t, !0);
      }),
      (s.prototype.rawListeners = function(t) {
        return d(this, t, !1);
      }),
      (s.listenerCount = function(t, e) {
        return "function" == typeof t.listenerCount
          ? t.listenerCount(e)
          : _.call(t, e);
      }),
      (s.prototype.listenerCount = _),
      (s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? r(this._events) : [];
      });
  },
  function(t, e, n) {
    "use strict";
    function r() {
      (this._protocol = null),
        (this._href = ""),
        (this._port = -1),
        (this._query = null),
        (this.auth = null),
        (this.slashes = null),
        (this.host = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.pathname = null),
        (this._prependSlash = !1);
    }
    var i = n(16);
    (r.queryString = i),
      (r.prototype.parse = function(t, e, n, i) {
        if ("string" != typeof t)
          throw new TypeError(
            "Parameter 'url' must be a string, not " + typeof t
          );
        for (var a = 0, o = t.length - 1; t.charCodeAt(a) <= 32; ) a++;
        for (; t.charCodeAt(o) <= 32; ) o--;
        if (
          ((a = this._parseProtocol(t, a, o)), "javascript" !== this._protocol)
        ) {
          a = this._parseHost(t, a, o, n);
          var s = this._protocol;
          !this.hostname &&
            (this.slashes || (s && !E[s])) &&
            (this.hostname = this.host = "");
        }
        if (a <= o) {
          var u = t.charCodeAt(a);
          47 === u || 92 === u
            ? this._parsePath(t, a, o, i)
            : 63 === u
            ? this._parseQuery(t, a, o, i)
            : 35 === u
            ? this._parseHash(t, a, o, i)
            : "javascript" !== this._protocol
            ? this._parsePath(t, a, o, i)
            : (this.pathname = t.slice(a, o + 1));
        }
        if (
          (!this.pathname &&
            this.hostname &&
            this._slashProtocols[this._protocol] &&
            (this.pathname = "/"),
          e)
        ) {
          var c = this.search;
          null == c && (c = this.search = ""),
            63 === c.charCodeAt(0) && (c = c.slice(1)),
            (this.query = r.queryString.parse(c));
        }
      }),
      (r.prototype.resolve = function(t) {
        return this.resolveObject(r.parse(t, !1, !0)).format();
      }),
      (r.prototype.format = function() {
        var t = this.auth || "";
        t &&
          ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")), (t += "@"));
        var e = this.protocol || "",
          n = this.pathname || "",
          i = this.hash || "",
          a = this.search || "",
          u = "",
          c = this.hostname || "",
          l = this.port || "",
          h = !1,
          f = "",
          d = this.query;
        if (
          (d && "object" == typeof d && (u = r.queryString.stringify(d)),
          a || (a = u ? "?" + u : ""),
          e && 58 !== e.charCodeAt(e.length - 1) && (e += ":"),
          this.host)
        )
          h = t + this.host;
        else if (c) {
          c.indexOf(":") > -1 && (c = "[" + c + "]"),
            (h = t + c + (l ? ":" + l : ""));
        }
        var _ = this.slashes || ((!e || E[e]) && !1 !== h);
        return (
          e ? (f = e + (_ ? "//" : "")) : _ && (f = "//"),
          _ && n && 47 !== n.charCodeAt(0) && (n = "/" + n),
          a && 63 !== a.charCodeAt(0) && (a = "?" + a),
          i && 35 !== i.charCodeAt(0) && (i = "#" + i),
          f + (!1 === h ? "" : h) + (n = o(n)) + (a = s(a)) + i
        );
      }),
      (r.prototype.resolveObject = function(t) {
        "string" == typeof t && (t = r.parse(t, !1, !0));
        var e = this._clone();
        if (((e.hash = t.hash), !t.href)) return (e._href = ""), e;
        if (t.slashes && !t._protocol)
          return (
            t._copyPropsTo(e, !0),
            E[e._protocol] && e.hostname && !e.pathname && (e.pathname = "/"),
            (e._href = ""),
            e
          );
        if (t._protocol && t._protocol !== e._protocol) {
          if (!E[t._protocol]) return t._copyPropsTo(e, !1), (e._href = ""), e;
          if (
            ((e._protocol = t._protocol),
            t.host || "javascript" === t._protocol)
          )
            e.pathname = t.pathname;
          else {
            for (
              var n = (t.pathname || "").split("/");
              n.length && !(t.host = n.shift());

            );
            t.host || (t.host = ""),
              t.hostname || (t.hostname = ""),
              "" !== n[0] && n.unshift(""),
              n.length < 2 && n.unshift(""),
              (e.pathname = n.join("/"));
          }
          return (
            (e.search = t.search),
            (e.host = t.host || ""),
            (e.auth = t.auth),
            (e.hostname = t.hostname || t.host),
            (e._port = t._port),
            (e.slashes = e.slashes || t.slashes),
            (e._href = ""),
            e
          );
        }
        var i = e.pathname && 47 === e.pathname.charCodeAt(0),
          a = t.host || (t.pathname && 47 === t.pathname.charCodeAt(0)),
          o = a || i || (e.host && t.pathname),
          s = o,
          u = (e.pathname && e.pathname.split("/")) || [],
          c =
            ((n = (t.pathname && t.pathname.split("/")) || []),
            e._protocol && !E[e._protocol]);
        if (
          (c &&
            ((e.hostname = ""),
            (e._port = -1),
            e.host && ("" === u[0] ? (u[0] = e.host) : u.unshift(e.host)),
            (e.host = ""),
            t._protocol &&
              ((t.hostname = ""),
              (t._port = -1),
              t.host && ("" === n[0] ? (n[0] = t.host) : n.unshift(t.host)),
              (t.host = "")),
            (o = o && ("" === n[0] || "" === u[0]))),
          a)
        )
          (e.host = t.host ? t.host : e.host),
            (e.hostname = t.hostname ? t.hostname : e.hostname),
            (e.search = t.search),
            (u = n);
        else if (n.length)
          u || (u = []), u.pop(), (u = u.concat(n)), (e.search = t.search);
        else if (t.search) {
          if (c)
            (e.hostname = e.host = u.shift()),
              (_ =
                !!(e.host && e.host.indexOf("@") > 0) && e.host.split("@")) &&
                ((e.auth = _.shift()), (e.host = e.hostname = _.shift()));
          return (e.search = t.search), (e._href = ""), e;
        }
        if (!u.length) return (e.pathname = null), (e._href = ""), e;
        for (
          var l = u.slice(-1)[0],
            h = ((e.host || t.host) && ("." === l || ".." === l)) || "" === l,
            f = 0,
            d = u.length;
          d >= 0;
          d--
        )
          "." === (l = u[d])
            ? u.splice(d, 1)
            : ".." === l
            ? (u.splice(d, 1), f++)
            : f && (u.splice(d, 1), f--);
        if (!o && !s) for (; f--; f) u.unshift("..");
        !o ||
          "" === u[0] ||
          (u[0] && 47 === u[0].charCodeAt(0)) ||
          u.unshift(""),
          h && "/" !== u.join("/").substr(-1) && u.push("");
        var _,
          p = "" === u[0] || (u[0] && 47 === u[0].charCodeAt(0));
        c &&
          ((e.hostname = e.host = p ? "" : u.length ? u.shift() : ""),
          (_ = !!(e.host && e.host.indexOf("@") > 0) && e.host.split("@")) &&
            ((e.auth = _.shift()), (e.host = e.hostname = _.shift())));
        return (
          (o = o || (e.host && u.length)) && !p && u.unshift(""),
          (e.pathname = 0 === u.length ? null : u.join("/")),
          (e.auth = t.auth || e.auth),
          (e.slashes = e.slashes || t.slashes),
          (e._href = ""),
          e
        );
      });
    var a = n(19);
    r.prototype._hostIdna = function(t) {
      return a.toASCII(t);
    };
    var o = (r.prototype._escapePathName = function(t) {
        return u(t, 35, 63)
          ? (function(t) {
              return t.replace(/[?#]/g, function(t) {
                return encodeURIComponent(t);
              });
            })(t)
          : t;
      }),
      s = (r.prototype._escapeSearch = function(t) {
        return u(t, 35, -1)
          ? (function(t) {
              return t.replace(/#/g, function(t) {
                return encodeURIComponent(t);
              });
            })(t)
          : t;
      });
    function u(t, e, n) {
      for (var r = 0, i = t.length; r < i; ++r) {
        var a = t.charCodeAt(r);
        if (a === e || a === n) return !0;
      }
      return !1;
    }
    function c(t) {
      var e = new Uint8Array(128);
      return (
        t.forEach(function(t) {
          if ("number" == typeof t) e[t] = 1;
          else for (var n = t[0], r = t[1], i = n; i <= r; ++i) e[i] = 1;
        }),
        e
      );
    }
    (r.prototype._parseProtocol = function(t, e, n) {
      for (var r = !1, i = this._protocolCharacters, a = e; a <= n; ++a) {
        var o = t.charCodeAt(a);
        if (58 === o) {
          var s = t.slice(e, a);
          return r && (s = s.toLowerCase()), (this._protocol = s), a + 1;
        }
        if (1 !== i[o]) return e;
        o < 97 && (r = !0);
      }
      return e;
    }),
      (r.prototype._parseAuth = function(t, e, n, r) {
        var i = t.slice(e, n + 1);
        r && (i = decodeURIComponent(i)), (this.auth = i);
      }),
      (r.prototype._parsePort = function(t, e, n) {
        for (var r = 0, i = !1, a = !0, o = e; o <= n; ++o) {
          var s = t.charCodeAt(o);
          if (!(48 <= s && s <= 57)) {
            (a = !1), (92 !== s && 47 !== s) || (a = !0);
            break;
          }
          (r = 10 * r + (s - 48)), (i = !0);
        }
        return (0 === r && !i) || !a
          ? (a || (this._port = -2), 0)
          : ((this._port = r), o - e);
      }),
      (r.prototype._parseHost = function(t, e, n, r) {
        var i = this._hostEndingCharacters,
          a = t.charCodeAt(e),
          o = t.charCodeAt(e + 1);
        if ((47 !== a && 92 !== a) || (47 !== o && 92 !== o)) {
          if (!this._protocol || E[this._protocol]) return e;
        } else {
          if (((this.slashes = !0), 0 === e)) {
            if (n < 2) return e;
            if (
              !(function(t, e, n, r) {
                for (var i = t.length, a = n; a < i; ++a) {
                  var o = t.charCodeAt(a);
                  if (o === e) return !0;
                  if (1 === r[o]) return !1;
                }
                return !1;
              })(t, 64, 2, i) &&
              !r
            )
              return (this.slashes = null), e;
          }
          e += 2;
        }
        for (
          var s = !1, u = !1, c = e, l = n, h = 0, f = 0, d = !1, _ = -1, p = e;
          p <= n;
          ++p
        ) {
          if (64 === (m = t.charCodeAt(p))) _ = p;
          else if (37 === m) d = !0;
          else if (1 === i[m]) break;
        }
        if (
          (_ > -1 && (this._parseAuth(t, e, _ - 1, d), (e = c = _ + 1)),
          91 === t.charCodeAt(e))
        ) {
          for (p = e + 1; p <= n; ++p) {
            if (93 === (m = t.charCodeAt(p))) {
              58 === t.charCodeAt(p + 1) &&
                (h = this._parsePort(t, p + 2, n) + 1);
              var v = t.slice(e + 1, p).toLowerCase();
              return (
                (this.hostname = v),
                (this.host =
                  this._port > 0 ? "[" + v + "]:" + this._port : "[" + v + "]"),
                (this.pathname = "/"),
                p + h + 1
              );
            }
          }
          return e;
        }
        for (p = e; p <= n; ++p) {
          if (f > 62) return (this.hostname = this.host = t.slice(e, p)), p;
          var m;
          if (58 === (m = t.charCodeAt(p))) {
            (h = this._parsePort(t, p + 1, n) + 1), (l = p - 1);
            break;
          }
          if (m < 97) {
            if (46 === m) f = -1;
            else if (65 <= m && m <= 90) s = !0;
            else if (
              !(45 === m || 95 === m || 43 === m || (48 <= m && m <= 57))
            ) {
              0 === i[m] &&
                0 === this._noPrependSlashHostEnders[m] &&
                (this._prependSlash = !0),
                (l = p - 1);
              break;
            }
          } else if (m >= 123) {
            if (m <= 126) {
              0 === this._noPrependSlashHostEnders[m] &&
                (this._prependSlash = !0),
                (l = p - 1);
              break;
            }
            u = !0;
          }
          m, f++;
        }
        if (l + 1 !== e && l - c <= 256) {
          v = t.slice(c, l + 1);
          s && (v = v.toLowerCase()),
            u && (v = this._hostIdna(v)),
            (this.hostname = v),
            (this.host = this._port > 0 ? v + ":" + this._port : v);
        }
        return l + 1 + h;
      }),
      (r.prototype._copyPropsTo = function(t, e) {
        e || (t._protocol = this._protocol),
          (t._href = this._href),
          (t._port = this._port),
          (t._prependSlash = this._prependSlash),
          (t.auth = this.auth),
          (t.slashes = this.slashes),
          (t.host = this.host),
          (t.hostname = this.hostname),
          (t.hash = this.hash),
          (t.search = this.search),
          (t.pathname = this.pathname);
      }),
      (r.prototype._clone = function() {
        var t = new r();
        return (
          (t._protocol = this._protocol),
          (t._href = this._href),
          (t._port = this._port),
          (t._prependSlash = this._prependSlash),
          (t.auth = this.auth),
          (t.slashes = this.slashes),
          (t.host = this.host),
          (t.hostname = this.hostname),
          (t.hash = this.hash),
          (t.search = this.search),
          (t.pathname = this.pathname),
          t
        );
      }),
      (r.prototype._getComponentEscaped = function(t, e, n, r) {
        for (
          var i = e,
            a = e,
            o = "",
            s = r ? this._afterQueryAutoEscapeMap : this._autoEscapeMap;
          a <= n;
          ++a
        ) {
          var u = s[t.charCodeAt(a)];
          "" !== u &&
            void 0 !== u &&
            (i < a && (o += t.slice(i, a)), (o += u), (i = a + 1));
        }
        return i < a + 1 && (o += t.slice(i, a)), o;
      }),
      (r.prototype._parsePath = function(t, e, n, r) {
        for (
          var i,
            a = e,
            o = n,
            s = !1,
            u = this._autoEscapeCharacters,
            c = -2 === this._port ? "/:" : "",
            l = e;
          l <= n;
          ++l
        ) {
          var h = t.charCodeAt(l);
          if (35 === h) {
            this._parseHash(t, l, n, r), (o = l - 1);
            break;
          }
          if (63 === h) {
            this._parseQuery(t, l, n, r), (o = l - 1);
            break;
          }
          r || s || 1 !== u[h] || (s = !0);
        }
        a > o
          ? (this.pathname = "" === c ? "/" : c)
          : ((i = s
              ? this._getComponentEscaped(t, a, o, !1)
              : t.slice(a, o + 1)),
            (this.pathname =
              "" === c ? (this._prependSlash ? "/" + i : i) : c + i));
      }),
      (r.prototype._parseQuery = function(t, e, n, r) {
        for (
          var i, a = e, o = n, s = !1, u = this._autoEscapeCharacters, c = e;
          c <= n;
          ++c
        ) {
          var l = t.charCodeAt(c);
          if (35 === l) {
            this._parseHash(t, c, n, r), (o = c - 1);
            break;
          }
          r || s || 1 !== u[l] || (s = !0);
        }
        a > o
          ? (this.search = "")
          : ((i = s
              ? this._getComponentEscaped(t, a, o, !0)
              : t.slice(a, o + 1)),
            (this.search = i));
      }),
      (r.prototype._parseHash = function(t, e, n, r) {
        this.hash =
          e > n
            ? ""
            : r
            ? t.slice(e, n + 1)
            : this._getComponentEscaped(t, e, n, !0);
      }),
      Object.defineProperty(r.prototype, "port", {
        get: function() {
          return this._port >= 0 ? "" + this._port : null;
        },
        set: function(t) {
          this._port = null == t ? -1 : parseInt(t, 10);
        }
      }),
      Object.defineProperty(r.prototype, "query", {
        get: function() {
          var t = this._query;
          if (null != t) return t;
          var e = this.search;
          return e && (63 === e.charCodeAt(0) && (e = e.slice(1)), "" !== e)
            ? ((this._query = e), e)
            : e;
        },
        set: function(t) {
          this._query = t;
        }
      }),
      Object.defineProperty(r.prototype, "path", {
        get: function() {
          var t = this.pathname || "",
            e = this.search || "";
          return t || e ? t + e : null == t && e ? "/" + e : null;
        },
        set: function() {}
      }),
      Object.defineProperty(r.prototype, "protocol", {
        get: function() {
          var t = this._protocol;
          return t ? t + ":" : t;
        },
        set: function(t) {
          if ("string" == typeof t) {
            var e = t.length - 1;
            58 === t.charCodeAt(e)
              ? (this._protocol = t.slice(0, e))
              : (this._protocol = t);
          } else null == t && (this._protocol = null);
        }
      }),
      Object.defineProperty(r.prototype, "href", {
        get: function() {
          var t = this._href;
          return t || (t = this._href = this.format()), t;
        },
        set: function(t) {
          this._href = t;
        }
      }),
      (r.parse = function(t, e, n, i) {
        if (t instanceof r) return t;
        var a = new r();
        return a.parse(t, !!e, !!n, !!i), a;
      }),
      (r.format = function(t) {
        return (
          "string" == typeof t && (t = r.parse(t)),
          t instanceof r ? t.format() : r.prototype.format.call(t)
        );
      }),
      (r.resolve = function(t, e) {
        return r.parse(t, !1, !0).resolve(e);
      }),
      (r.resolveObject = function(t, e) {
        return t ? r.parse(t, !1, !0).resolveObject(e) : e;
      });
    for (
      var l = [
          "<",
          ">",
          '"',
          "`",
          " ",
          "\r",
          "\n",
          "\t",
          "{",
          "}",
          "|",
          "\\",
          "^",
          "`",
          "'"
        ],
        h = new Array(128),
        f = 0,
        d = h.length;
      f < d;
      ++f
    )
      h[f] = "";
    for (f = 0, d = l.length; f < d; ++f) {
      var _ = l[f],
        p = encodeURIComponent(_);
      p === _ && (p = escape(_)), (h[_.charCodeAt(0)] = p);
    }
    var v = h.slice();
    h[92] = "/";
    var E = (r.prototype._slashProtocols = {
      http: !0,
      https: !0,
      gopher: !0,
      file: !0,
      ftp: !0,
      "http:": !0,
      "https:": !0,
      "gopher:": !0,
      "file:": !0,
      "ftp:": !0
    });
    (r.prototype._protocolCharacters = c([[97, 122], [65, 90], 46, 43, 45])),
      (r.prototype._hostEndingCharacters = c([35, 63, 47, 92])),
      (r.prototype._autoEscapeCharacters = c(
        l.map(function(t) {
          return t.charCodeAt(0);
        })
      )),
      (r.prototype._noPrependSlashHostEnders = c(
        [
          "<",
          ">",
          "'",
          "`",
          " ",
          "\r",
          "\n",
          "\t",
          "{",
          "}",
          "|",
          "^",
          "`",
          '"',
          "%",
          ";"
        ].map(function(t) {
          return t.charCodeAt(0);
        })
      )),
      (r.prototype._autoEscapeMap = h),
      (r.prototype._afterQueryAutoEscapeMap = v),
      (t.exports = r),
      (r.replace = function() {
        n.c.url = { exports: r };
      });
  },
  function(t, e, n) {
    "use strict";
    var r = n(2).EventEmitter;
    function i() {
      r.call(this), this.setMaxListeners(20);
    }
    (i.prototype = Object.create(r.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.off = function(t, e) {
        return e
          ? this.removeListener(t, e)
          : t
          ? this.removeAllListeners(t)
          : this.removeAllListeners();
      }),
      (t.exports = i);
  },
  function(t, e, n) {
    "use strict";
    t.exports = {
      mbs: 0,
      secs: 0,
      update: function(t, e, n, r) {
        var i,
          a = t.getAllResponseHeaders();
        if (a) {
          var o = a.match(/content-length: (\d+)/i);
          o && o.length && (i = o[1]);
        }
        if (i) {
          var s = (i = parseInt(i, 10)) / 1024 / 1024,
            u = (Date.now() - e) / 1e3;
          (this.secs += u), (this.mbs += s), r && this.log(n, s, u);
        } else r && console.warn.call(console, "Can't get Content-Length:", n);
      },
      log: function(t, e, n) {
        if (t) {
          var r =
            "File loaded: " +
            t.substr(t.lastIndexOf("/") + 1) +
            " size:" +
            e.toFixed(2) +
            "mb time:" +
            n.toFixed(2) +
            "s speed:" +
            (e / n).toFixed(2) +
            "mbps";
          console.log.call(console, r);
        }
        var i =
          "Total loaded: " +
          this.mbs.toFixed(2) +
          "mb time:" +
          this.secs.toFixed(2) +
          "s speed:" +
          this.getMbps().toFixed(2) +
          "mbps";
        console.log.call(console, i);
      },
      getMbps: function() {
        return this.mbs / this.secs;
      }
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(13);
    (r.stats = n(5)), (t.exports = r);
  },
  function(t, e, n) {
    var r = n(8);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(10)(r, i);
    r.locals && (t.exports = r.locals);
  },
  function(t, e, n) {
    (t.exports = n(9)(!1)).push([
      t.i,
      "html,body{width:100%;height:100%;margin:0;padding:0;overflow:hidden;position:static;background:#333;background:-moz-radial-gradient(center, ellipse cover, #333 0%, #000 100%);background:-webkit-radial-gradient(center, ellipse cover, #333 0%, #000 100%);background:radial-gradient(ellipse at center, #333 0%, #000 100%);background:black}html{-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,text,p{-webkit-font-smoothing:antialiased;-moz-osx-webkit-font-smoothing:antialiased;font-family:'Open Sans', sans-serif;pointer-events:none}.Main-Canvas{width:100%;height:100%;top:0px;left:0px;position:absolute;user-select:none;opacity:1;transition:opacity .5s ease-out .25s}.isLoading .Main-Canvas{opacity:0}.Message{position:absolute;z-index:999;width:100%;top:calc(50% - 50px);text-align:center;letter-spacing:11px;color:white;opacity:0;transition:opacity .5s ease-out, letter-spacing .5s ease-out}.isLoading .Message{letter-spacing:10px;opacity:1}.Loading-Bar{position:absolute;z-index:998;width:0%;height:1px;top:50%;background:rgba(255,255,255,0.5);opacity:0;transition:width .5s ease-out, opacity .5s ease-out}.isLoading .Loading-Bar{opacity:1}.webcamVideo{position:fixed;z-index:3;opacity:0.0;transform:scale(-1, 1);bottom:0;width:25%;transition:opacity .5s ease-in-out}.showWebcam .webcamVideo{opacity:0.5}.desc{position:fixed;z-index:9;width:100%;text-align:center;bottom:8%;color:white;opacity:.5;letter-spacing:5px;transition:opacity 1s ease-out 1s}.hideHint .desc{transition:opacity 1s ease-out;opacity:0}\n",
      ""
    ]);
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var n = (function(t, e) {
              var n = t[1] || "",
                r = t[3];
              if (!r) return n;
              if (e && "function" == typeof btoa) {
                var i =
                    ((o = r),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                      " */"),
                  a = r.sources.map(function(t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                  });
                return [n]
                  .concat(a)
                  .concat([i])
                  .join("\n");
              }
              var o;
              return [n].join("\n");
            })(e, t);
            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (e.i = function(t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var r = {}, i = 0; i < this.length; i++) {
            var a = this[i][0];
            null != a && (r[a] = !0);
          }
          for (i = 0; i < t.length; i++) {
            var o = t[i];
            (null != o[0] && r[o[0]]) ||
              (n && !o[2]
                ? (o[2] = n)
                : n && (o[2] = "(" + o[2] + ") and (" + n + ")"),
              e.push(o));
          }
        }),
        e
      );
    };
  },
  function(t, e, n) {
    var r,
      i,
      a = {},
      o =
        ((r = function() {
          return window && document && document.all && !window.atob;
        }),
        function() {
          return void 0 === i && (i = r.apply(this, arguments)), i;
        }),
      s = function(t, e) {
        return e ? e.querySelector(t) : document.querySelector(t);
      },
      u = (function(t) {
        var e = {};
        return function(t, n) {
          if ("function" == typeof t) return t();
          if (void 0 === e[t]) {
            var r = s.call(this, t, n);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (t) {
                r = null;
              }
            e[t] = r;
          }
          return e[t];
        };
      })(),
      c = null,
      l = 0,
      h = [],
      f = n(11);
    function d(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          i = a[r.id];
        if (i) {
          i.refs++;
          for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
          for (; o < r.parts.length; o++) i.parts.push(T(r.parts[o], e));
        } else {
          var s = [];
          for (o = 0; o < r.parts.length; o++) s.push(T(r.parts[o], e));
          a[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function _(t, e) {
      for (var n = [], r = {}, i = 0; i < t.length; i++) {
        var a = t[i],
          o = e.base ? a[0] + e.base : a[0],
          s = { css: a[1], media: a[2], sourceMap: a[3] };
        r[o] ? r[o].parts.push(s) : n.push((r[o] = { id: o, parts: [s] }));
      }
      return n;
    }
    function p(t, e) {
      var n = u(t.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = h[h.length - 1];
      if ("top" === t.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(e, r.nextSibling)
            : n.appendChild(e)
          : n.insertBefore(e, n.firstChild),
          h.push(e);
      else if ("bottom" === t.insertAt) n.appendChild(e);
      else {
        if ("object" != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var i = u(t.insertAt.before, n);
        n.insertBefore(e, i);
      }
    }
    function v(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = h.indexOf(t);
      e >= 0 && h.splice(e, 1);
    }
    function E(t) {
      var e = document.createElement("style");
      if (
        (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce)
      ) {
        var r = (function() {
          0;
          return n.nc;
        })();
        r && (t.attrs.nonce = r);
      }
      return m(e, t.attrs), p(t, e), e;
    }
    function m(t, e) {
      Object.keys(e).forEach(function(n) {
        t.setAttribute(n, e[n]);
      });
    }
    function T(t, e) {
      var n, r, i, a;
      if (e.transform && t.css) {
        if (
          !(a =
            "function" == typeof e.transform
              ? e.transform(t.css)
              : e.transform.default(t.css))
        )
          return function() {};
        t.css = a;
      }
      if (e.singleton) {
        var o = l++;
        (n = c || (c = E(e))),
          (r = y.bind(null, n, o, !1)),
          (i = y.bind(null, n, o, !0));
      } else
        t.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function(t) {
              var e = document.createElement("link");
              return (
                void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                (t.attrs.rel = "stylesheet"),
                m(e, t.attrs),
                p(t, e),
                e
              );
            })(e)),
            (r = M.bind(null, n, e)),
            (i = function() {
              v(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = E(e)),
            (r = R.bind(null, n)),
            (i = function() {
              v(n);
            }));
      return (
        r(t),
        function(e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            r((t = e));
          } else i();
        }
      );
    }
    t.exports = function(t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
      var n = _(t, e);
      return (
        d(n, e),
        function(t) {
          for (var r = [], i = 0; i < n.length; i++) {
            var o = n[i];
            (s = a[o.id]).refs--, r.push(s);
          }
          t && d(_(t, e), e);
          for (i = 0; i < r.length; i++) {
            var s;
            if (0 === (s = r[i]).refs) {
              for (var u = 0; u < s.parts.length; u++) s.parts[u]();
              delete a[s.id];
            }
          }
        }
      );
    };
    var b,
      g =
        ((b = []),
        function(t, e) {
          return (b[t] = e), b.filter(Boolean).join("\n");
        });
    function y(t, e, n, r) {
      var i = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = g(e, i);
      else {
        var a = document.createTextNode(i),
          o = t.childNodes;
        o[e] && t.removeChild(o[e]),
          o.length ? t.insertBefore(a, o[e]) : t.appendChild(a);
      }
    }
    function R(t, e) {
      var n = e.css,
        r = e.media;
      if ((r && t.setAttribute("media", r), t.styleSheet))
        t.styleSheet.cssText = n;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
    function M(t, e, n) {
      var r = n.css,
        i = n.sourceMap,
        a = void 0 === e.convertToAbsoluteUrls && i;
      (e.convertToAbsoluteUrls || a) && (r = f(r)),
        i &&
          (r +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            " */");
      var o = new Blob([r], { type: "text/css" }),
        s = t.href;
      (t.href = URL.createObjectURL(o)), s && URL.revokeObjectURL(s);
    }
  },
  function(t, e) {
    t.exports = function(t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
        r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(t, e) {
          var i,
            a = e
              .trim()
              .replace(/^"(.*)"$/, function(t, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function(t, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
            ? t
            : ((i =
                0 === a.indexOf("//")
                  ? a
                  : 0 === a.indexOf("/")
                  ? n + a
                  : r + a.replace(/^\.\//, "")),
              "url(" + JSON.stringify(i) + ")");
        }
      );
    };
  },
  function(t, e) {
    window.gui = { add: () => {} };
  },
  function(t, e, n) {
    "use strict";
    var r = n(4),
      i = n(14),
      a = 0;
    t.exports = function t(e) {
      var n,
        o = {},
        s = [],
        u = [],
        c = 0,
        l = 0,
        h = {},
        f = function(r) {
          return Array.isArray(r)
            ? (r.forEach(f), n)
            : ((a =
                !!r.assets && Array.isArray(r.assets)
                  ? t(_(r, e))
                  : i(_(r, e))).once("destroy", m),
              u.push(a),
              (h[a.id] = a),
              n);
          var a;
        },
        d = function(t) {
          return arguments.length ? (o[t] ? o[t] : h[t]) : s;
        },
        _ = function(t, e) {
          "string" == typeof t && (t = { url: t });
          return (
            void 0 === t.isTouchLocked && (t.isTouchLocked = e.isTouchLocked),
            void 0 === t.blob && (t.blob = e.blob),
            void 0 === t.basePath && (t.basePath = e.basePath),
            (t.id = t.id || t.url || String(++a)),
            (t.type =
              t.type ||
              (function(t) {
                return (
                  t &&
                  t
                    .split("?")[0]
                    .split(".")
                    .pop()
                    .toLowerCase()
                );
              })(t.url)),
            (t.crossOrigin = t.crossOrigin || e.crossOrigin),
            (t.webAudioContext = t.webAudioContext || e.webAudioContext),
            (t.log = e.log),
            t
          );
        },
        p = function(t) {
          var e = c + t;
          n.emit("progress", e / l);
        },
        v = function(t, e, r) {
          Array.isArray(t) && (t = { id: e, file: t, type: r }),
            c++,
            n.emit("progress", c / l),
            (o[t.id] = t.file),
            s.push(t),
            n.emit("childcomplete", t),
            T();
        },
        E = function(t) {
          l--,
            n.listeners("error").length ? n.emit("error", t) : console.error(t),
            T();
        },
        m = function(t) {
          (h[t] = null),
            delete h[t],
            (o[t] = null),
            delete o[t],
            s.some(function(e, n) {
              if (e.id === t) return s.splice(n, 1), !0;
            });
        },
        T = function() {
          c >= l && n.emit("complete", s, o, e.id, "group");
        };
      return (
        (n = Object.create(r.prototype, {
          _events: { value: {} },
          id: {
            get: function() {
              return e.id;
            }
          },
          add: { value: f },
          start: {
            value: function() {
              return (
                (l = u.length),
                u.forEach(function(t) {
                  t.on("progress", p)
                    .once("complete", v)
                    .once("error", E)
                    .start();
                }),
                (u = []),
                n
              );
            }
          },
          get: { value: d },
          find: {
            value: function(t) {
              if (d(t)) return d(t);
              var e = null;
              return (
                Object.keys(h).some(function(n) {
                  return !!(e = h[n].find && h[n].find(t));
                }),
                e
              );
            }
          },
          getLoader: {
            value: function(t) {
              return h[t];
            }
          },
          loaded: {
            get: function() {
              return c >= l;
            }
          },
          file: {
            get: function() {
              return s;
            }
          },
          destroy: {
            value: function() {
              for (; u.length; ) u.pop().destroy();
              return (
                n.off("error"),
                n.off("progress"),
                n.off("complete"),
                (s = []),
                (o = {}),
                (e.webAudioContext = null),
                (l = 0),
                (c = 0),
                Object.keys(h).forEach(function(t) {
                  h[t].destroy();
                }),
                (h = {}),
                n.emit("destroy", n.id),
                n
              );
            }
          }
        })),
        (e = _(e || {}, {
          basePath: "",
          blob: !1,
          touchLocked: !1,
          crossOrigin: null,
          webAudioContext: null,
          log: !1
        })),
        Array.isArray(e.assets) && f(e.assets),
        n
      );
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(4),
      i = n(15),
      a = n(5);
    t.exports = function(t) {
      var e,
        n,
        o,
        s,
        u,
        c,
        l = t.id,
        h = t.basePath || "",
        f = t.url,
        d = t.type,
        _ = t.crossOrigin,
        p = t.isTouchLocked,
        v = t.blob && i,
        E = t.webAudioContext,
        m = t.log,
        T = function(t) {
          t &&
            ((c = { id: l, file: t, type: d }),
            e.emit("progress", 1),
            e.emit("complete", c, l, d),
            F());
        },
        b = function(t, e) {
          (n = e || y),
            (o = new XMLHttpRequest()).open("GET", h + f, !0),
            (o.responseType = t),
            o.addEventListener("progress", g),
            o.addEventListener("load", n),
            o.addEventListener("error", C),
            o.send();
        },
        g = function(t) {
          t.lengthComputable && e.emit("progress", t.loaded / t.total);
        },
        y = function() {
          R() && T(o.response);
        },
        R = function() {
          return o && o.status < 400
            ? (a.update(o, s, f, m), !0)
            : (C(o && o.statusText), !1);
        },
        M = function() {
          b("json", function() {
            if (R()) {
              var t = o.response;
              "string" == typeof t && (t = JSON.parse(t)), T(t);
            }
          });
        },
        A = function() {
          v ? P() : x();
        },
        x = function() {
          (o = new Image()),
            _ && (o.crossOrigin = "anonymous"),
            o.addEventListener("error", C, !1),
            o.addEventListener("load", w, !1),
            (o.src = h + f);
        },
        w = function(t) {
          window.clearTimeout(u), t || (!o.error && o.readyState) ? T(o) : C();
        },
        P = function() {
          b("blob", function() {
            R() &&
              ((o = new Image()).addEventListener("error", C, !1),
              o.addEventListener("load", O, !1),
              (o.src = window.URL.createObjectURL(o.response)));
          });
        },
        O = function() {
          window.URL.revokeObjectURL(o.src), T(o);
        },
        L = function() {
          E ? I() : N("audio");
        },
        S = function() {
          v ? b("blob") : N("video");
        },
        I = function() {
          b("arraybuffer", function() {
            R() &&
              E.decodeAudioData(
                o.response,
                function(t) {
                  (o = null), T(t);
                },
                function(t) {
                  C(t);
                }
              );
          });
        },
        N = function(t) {
          (o = document.createElement(t)),
            p ||
              (window.clearTimeout(u),
              (u = window.setTimeout(w, 2e3)),
              o.addEventListener("canplaythrough", w, !1)),
            o.addEventListener("error", C, !1),
            (o.preload = "auto"),
            (o.src = h + f),
            o.load(),
            p && T(o);
        },
        C = function(t) {
          window.clearTimeout(u);
          var n = t;
          if (o && o.tagName && o.error) {
            n =
              "MediaError: " +
              ["", "ABORTED", "NETWORK", "DECODE", "SRC_NOT_SUPPORTED"][
                o.error.code
              ] +
              " " +
              o.src;
          } else
            o && o.statusText
              ? (n = o.statusText)
              : t && t.message
              ? (n = t.message)
              : t && t.type && (n = t.type);
          e.emit("error", 'Error loading "' + h + f + '" ' + n), U();
        },
        F = function() {
          e.off("error"),
            e.off("progress"),
            e.off("complete"),
            o &&
              (o.removeEventListener("progress", g),
              o.removeEventListener("load", n),
              o.removeEventListener("error", C),
              o.removeEventListener("load", w),
              o.removeEventListener("canplaythrough", w),
              o.removeEventListener("load", O));
        },
        U = function() {
          F(),
            o && o.abort && o.readyState < 4 && o.abort(),
            (o = null),
            (E = null),
            (c = null),
            window.clearTimeout(u),
            e.emit("destroy", l);
        };
      return (e = Object.create(r.prototype, {
        _events: { value: {} },
        id: { value: t.id },
        start: {
          value: function() {
            switch (((s = Date.now()), d)) {
              case "json":
                M();
                break;
              case "jpg":
              case "png":
              case "gif":
              case "webp":
              case "svg":
                A();
                break;
              case "mp3":
              case "ogg":
              case "opus":
              case "wav":
              case "m4a":
                L();
                break;
              case "ogv":
              case "mp4":
              case "webm":
              case "hls":
                S();
                break;
              case "bin":
              case "binary":
                b("arraybuffer");
                break;
              case "txt":
              case "text":
                b("text");
                break;
              default:
                throw "AssetsLoader ERROR: Unknown type for file with URL: " +
                  h +
                  f +
                  " (" +
                  d +
                  ")";
            }
          }
        },
        loaded: {
          get: function() {
            return !!c;
          }
        },
        file: {
          get: function() {
            return c;
          }
        },
        destroy: { value: U }
      }));
    };
  },
  function(t, e, n) {
    "use strict";
    t.exports = (function() {
      try {
        return !!new Blob();
      } catch (t) {
        return !1;
      }
    })();
  },
  function(t, e, n) {
    "use strict";
    (e.decode = e.parse = n(17)), (e.encode = e.stringify = n(18));
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    t.exports = function(t, e, n, a) {
      (e = e || "&"), (n = n || "=");
      var o = {};
      if ("string" != typeof t || 0 === t.length) return o;
      var s = /\+/g;
      t = t.split(e);
      var u = 1e3;
      a && "number" == typeof a.maxKeys && (u = a.maxKeys);
      var c = t.length;
      u > 0 && c > u && (c = u);
      for (var l = 0; l < c; ++l) {
        var h,
          f,
          d,
          _,
          p = t[l].replace(s, "%20"),
          v = p.indexOf(n);
        v >= 0
          ? ((h = p.substr(0, v)), (f = p.substr(v + 1)))
          : ((h = p), (f = "")),
          (d = decodeURIComponent(h)),
          (_ = decodeURIComponent(f)),
          r(o, d) ? (i(o[d]) ? o[d].push(_) : (o[d] = [o[d], _])) : (o[d] = _);
      }
      return o;
    };
    var i =
      Array.isArray ||
      function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };
  },
  function(t, e, n) {
    "use strict";
    var r = function(t) {
      switch (typeof t) {
        case "string":
          return t;
        case "boolean":
          return t ? "true" : "false";
        case "number":
          return isFinite(t) ? t : "";
        default:
          return "";
      }
    };
    t.exports = function(t, e, n, s) {
      return (
        (e = e || "&"),
        (n = n || "="),
        null === t && (t = void 0),
        "object" == typeof t
          ? a(o(t), function(o) {
              var s = encodeURIComponent(r(o)) + n;
              return i(t[o])
                ? a(t[o], function(t) {
                    return s + encodeURIComponent(r(t));
                  }).join(e)
                : s + encodeURIComponent(r(t[o]));
            }).join(e)
          : s
          ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(t))
          : ""
      );
    };
    var i =
      Array.isArray ||
      function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };
    function a(t, e) {
      if (t.map) return t.map(e);
      for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
      return n;
    }
    var o =
      Object.keys ||
      function(t) {
        var e = [];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e;
      };
  },
  function(t, e, n) {
    (function(t, r) {
      var i;
      /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function(a) {
        e && e.nodeType, t && t.nodeType;
        var o = "object" == typeof r && r;
        o.global !== o && o.window !== o && o.self;
        var s,
          u = 2147483647,
          c = 36,
          l = 1,
          h = 26,
          f = 38,
          d = 700,
          _ = 72,
          p = 128,
          v = "-",
          E = /^xn--/,
          m = /[^\x20-\x7E]/,
          T = /[\x2E\u3002\uFF0E\uFF61]/g,
          b = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
          },
          g = c - l,
          y = Math.floor,
          R = String.fromCharCode;
        function M(t) {
          throw new RangeError(b[t]);
        }
        function A(t, e) {
          for (var n = t.length, r = []; n--; ) r[n] = e(t[n]);
          return r;
        }
        function x(t, e) {
          var n = t.split("@"),
            r = "";
          return (
            n.length > 1 && ((r = n[0] + "@"), (t = n[1])),
            r + A((t = t.replace(T, ".")).split("."), e).join(".")
          );
        }
        function w(t) {
          for (var e, n, r = [], i = 0, a = t.length; i < a; )
            (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < a
              ? 56320 == (64512 & (n = t.charCodeAt(i++)))
                ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
                : (r.push(e), i--)
              : r.push(e);
          return r;
        }
        function P(t) {
          return A(t, function(t) {
            var e = "";
            return (
              t > 65535 &&
                ((e += R((((t -= 65536) >>> 10) & 1023) | 55296)),
                (t = 56320 | (1023 & t))),
              (e += R(t))
            );
          }).join("");
        }
        function O(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }
        function L(t, e, n) {
          var r = 0;
          for (
            t = n ? y(t / d) : t >> 1, t += y(t / e);
            t > (g * h) >> 1;
            r += c
          )
            t = y(t / g);
          return y(r + ((g + 1) * t) / (t + f));
        }
        function S(t) {
          var e,
            n,
            r,
            i,
            a,
            o,
            s,
            f,
            d,
            E,
            m,
            T = [],
            b = t.length,
            g = 0,
            R = p,
            A = _;
          for ((n = t.lastIndexOf(v)) < 0 && (n = 0), r = 0; r < n; ++r)
            t.charCodeAt(r) >= 128 && M("not-basic"), T.push(t.charCodeAt(r));
          for (i = n > 0 ? n + 1 : 0; i < b; ) {
            for (
              a = g, o = 1, s = c;
              i >= b && M("invalid-input"),
                ((f =
                  (m = t.charCodeAt(i++)) - 48 < 10
                    ? m - 22
                    : m - 65 < 26
                    ? m - 65
                    : m - 97 < 26
                    ? m - 97
                    : c) >= c ||
                  f > y((u - g) / o)) &&
                  M("overflow"),
                (g += f * o),
                !(f < (d = s <= A ? l : s >= A + h ? h : s - A));
              s += c
            )
              o > y(u / (E = c - d)) && M("overflow"), (o *= E);
            (A = L(g - a, (e = T.length + 1), 0 == a)),
              y(g / e) > u - R && M("overflow"),
              (R += y(g / e)),
              (g %= e),
              T.splice(g++, 0, R);
          }
          return P(T);
        }
        function I(t) {
          var e,
            n,
            r,
            i,
            a,
            o,
            s,
            f,
            d,
            E,
            m,
            T,
            b,
            g,
            A,
            x = [];
          for (T = (t = w(t)).length, e = p, n = 0, a = _, o = 0; o < T; ++o)
            (m = t[o]) < 128 && x.push(R(m));
          for (r = i = x.length, i && x.push(v); r < T; ) {
            for (s = u, o = 0; o < T; ++o) (m = t[o]) >= e && m < s && (s = m);
            for (
              s - e > y((u - n) / (b = r + 1)) && M("overflow"),
                n += (s - e) * b,
                e = s,
                o = 0;
              o < T;
              ++o
            )
              if (((m = t[o]) < e && ++n > u && M("overflow"), m == e)) {
                for (
                  f = n, d = c;
                  !(f < (E = d <= a ? l : d >= a + h ? h : d - a));
                  d += c
                )
                  (A = f - E),
                    (g = c - E),
                    x.push(R(O(E + (A % g), 0))),
                    (f = y(A / g));
                x.push(R(O(f, 0))), (a = L(n, b, r == i)), (n = 0), ++r;
              }
            ++n, ++e;
          }
          return x.join("");
        }
        (s = {
          version: "1.4.1",
          ucs2: { decode: w, encode: P },
          decode: S,
          encode: I,
          toASCII: function(t) {
            return x(t, function(t) {
              return m.test(t) ? "xn--" + I(t) : t;
            });
          },
          toUnicode: function(t) {
            return x(t, function(t) {
              return E.test(t) ? S(t.slice(4).toLowerCase()) : t;
            });
          }
        }),
          void 0 ===
            (i = function() {
              return s;
            }.call(e, n, e, t)) || (t.exports = i);
      })();
    }.call(this, n(20)(t), n(21)));
  },
  function(t, e) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
              return t.l;
            }
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
              return t.i;
            }
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function(t, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function(t, e, n) {
    "use strict";
    var r = n(23);
    t.exports = u;
    var i = /\+/g,
      a = /^[0-9]+$/,
      o = Array.isArray,
      s = {}.hasOwnProperty;
    function u() {
      (this.containsSparse = !1), (this.cacheKey = ""), (this.cacheVal = null);
    }
    (u.maxLength = 32768),
      (u.maxDepth = 4),
      (u.maxKeys = 256),
      (u.parse = function(t) {
        if ("string" == typeof t) {
          var e = u.maxLength;
          if (t.length > e)
            throw new RangeError(
              "str is too large (QueryStringParser.maxLength=" + e + ")"
            );
          return new u().parseString(t, !1);
        }
        return null !== t && "object" == typeof t ? new u().parseObject(t) : {};
      }),
      (u.stringify = function(t) {
        return new r().serialize(t);
      }),
      (u.prototype.decode = function(t, e, n) {
        if (!1 === e) return t;
        !0 === n && (t = t.replace(i, " "));
        try {
          return decodeURIComponent(t);
        } catch (e) {
          return t;
        }
      }),
      (u.prototype.maybeArrayIndex = function(t, e) {
        var n = t.length;
        if (0 === n) return e;
        var r = t.charCodeAt(0);
        if (48 === r) return n > 1 ? -1 : 0;
        if (48 <= r && r <= 57) {
          if (1 === n) return r - 48;
          if (a.test(t)) {
            var i = parseInt(t, 10);
            if (0 < i && i <= 1073741822) return i;
          }
        }
        return -1;
      }),
      (u.prototype.getSlot = function(t, e, n) {
        var r;
        s.call(t, e)
          ? (r = t[e])
          : ((r = this.maybeArrayIndex(n, 0) > -1 ? [] : {}), (t[e] = r));
        return r;
      }),
      (u.prototype.placeNestedValue = function(t, e, n, r, i, a) {
        var s = this.getSlot(t, i, a),
          c = -1;
        o(s) && (c = this.maybeArrayIndex(a, s.length));
        for (var l = e.length, h = 2, f = u.maxDepth, d = -1; r < l; ++r) {
          var _ = e.charCodeAt(r);
          if (91 === _) d = r + 1;
          else if (93 === _ && d > -1) {
            if (
              ((i = a),
              (a = d === r ? "" : e.substring(d, r)),
              (d = -1),
              ++h > f)
            )
              throw new RangeError(
                "Nesting depth of keys is too large (QueryStringParser.maxDepth=" +
                  f +
                  ")"
              );
            (s = this.getSlot(s, i, a)),
              (c = o(s) ? this.maybeArrayIndex(a, s.length) : -1);
          }
        }
        c > -1
          ? "" !== n &&
            (c === s.length
              ? s.push(n)
              : ((this.containsSparse = !0), (s[c] = n)))
          : this.insert(s, a, n);
      }),
      (u.prototype.insert = function(t, e, n) {
        var r = null;
        if (s.call(t, e)) {
          var i = t[e];
          o(i) ? (i.push(n), (r = i)) : ((r = [i, n]), (t[e] = r));
        } else t[e] = n;
        return r;
      }),
      (u.prototype.push = function(t, e, n) {
        var r = null;
        if (s.call(t, e)) {
          var i = t[e];
          i.push(n), (r = i);
        } else (r = [n]), (t[e] = r);
        return r;
      }),
      (u.prototype.maybePlaceNestedValue = function(t, e, n) {
        var r = e.length;
        if (93 === e.charCodeAt(r - 1)) {
          for (var i, a, o = -1, s = 0; s < r; ++s) {
            var u = e.charCodeAt(s);
            if (91 === u) (o = s + 1), (a = e.slice(0, s));
            else if (93 === u) {
              if (o < 0) return void this.placeValue(t, e, n, !1);
              (i = o === s ? "" : e.slice(o, s)), s++;
              break;
            }
          }
          void 0 !== i
            ? "" === i && "" !== n && s === r
              ? e === this.cacheKey
                ? this.cacheVal.push(n)
                : ((this.cacheKey = e), (this.cacheVal = this.push(t, a, n)))
              : this.placeNestedValue(t, e, n, s, a, i)
            : this.placeValue(t, e, n, !1);
        } else this.placeValue(t, e, n, !1);
      }),
      (u.prototype.placeValue = function(t, e, n, r) {
        if (!0 !== r)
          if (e !== this.cacheKey) {
            var i = this.insert(t, e, n);
            null !== i && ((this.cacheKey = e), (this.cacheVal = i));
          } else this.cacheVal.push(n);
        else this.maybePlaceNestedValue(t, e, n);
      }),
      (u.prototype.compact = function(t) {
        if (o(t)) {
          for (var e = [], n = 0, r = (i = Object.keys(t)).length; n < r; ++n)
            e.push(t[i[n]]);
          return e;
        }
        if ("object" != typeof t) return t;
        var i;
        for (n = 0, r = (i = Object.keys(t)).length; n < r; ++n) {
          var a = i[n];
          t[a] = this.compact(t[a]);
        }
      }),
      (u.prototype.parseObject = function(t) {
        var e = Object.keys(t),
          n = e.length;
        if (0 === n) return {};
        n--;
        for (var r, i = "", a = 0; a < n; ++a)
          i += (r = e[a]) + "=" + t[r] + "&";
        return (i += (r = e[a]) + "=" + t[r]), this.parseString(i, !0);
      }),
      (u.prototype.parseString = function(t, e) {
        for (
          var n = u.maxKeys,
            r = 0,
            i = !1,
            a = !1,
            o = !1,
            s = t.length,
            c = 0,
            l = {},
            h = 0,
            f = 0,
            d = 0,
            _ = 0,
            p = 0,
            v = s - 1,
            E = !1;
          c < s;
          ++c
        ) {
          var m = t.charCodeAt(c);
          if (91 === m) p++;
          else if (p > 0 && 93 === m) (o = !0), p--;
          else if (0 === p && 61 === m) {
            var T = c + 1;
            (f = c - 1), (_ = d = T);
            var b = t.slice(h, f + 1);
            for (b = this.decode(b, i, E), i = !1; T < s; ++T)
              if (
                ((43 !== (m = t.charCodeAt(T)) && 37 !== m) ||
                  e ||
                  (43 === m && (E = !0), (a = !0)),
                38 === m || T === v)
              ) {
                (_ = T), (c = T), 38 === m && _--;
                var g = t.slice(d, _ + 1);
                if (
                  ((g = this.decode(g, a, E)),
                  this.placeValue(l, b, g, o),
                  (E = a = !1),
                  (o = !1),
                  (h = T + 1),
                  ++r > n)
                )
                  throw new RangeError(
                    "Amount of keys is too large (QueryStringParser.maxKeys=" +
                      n +
                      ")"
                  );
                break;
              }
          } else
            (43 !== m && 37 !== m) || e || (43 === m && (E = !0), (i = !0));
        }
        if (h !== s) {
          (g = ""), (b = t.slice(h, s));
          (b = this.decode(b, i, E)), this.placeValue(l, b, g, o);
        }
        return this.containsSparse && this.compact(l), l;
      });
  },
  function(t, e, n) {
    "use strict";
    t.exports = c;
    var r = encodeURIComponent,
      i = [],
      a = Array.isArray,
      o = Object.getPrototypeOf,
      s = o({});
    function u(t) {
      if (a(t)) return !0;
      if (null === t || "object" != typeof t) return !1;
      var e = o(t);
      return e === s || null === e;
    }
    function c() {}
    c.prototype.serialize = function(t) {
      if (null === t || "object" != typeof t)
        throw new TypeError("the obj to stringify must be an object");
      for (
        var e = Object.keys(t),
          n = e.length,
          o = i,
          s = [],
          c = [],
          l = t,
          h = "",
          f = 0;
        f < n;
        ++f
      ) {
        var d = e === o ? f : e[f],
          _ = l[d];
        if (u(_))
          s.push(h, l, e, n, f),
            (h = "" === h ? d : h + "[" + r(d) + "]"),
            a(_)
              ? ((e = o), (n = _.length))
              : (n = (e = Object.keys(_)).length),
            (f = -1),
            (l = _);
        else {
          "string" != typeof _ && (_ = "" + _);
          var p = "" === h ? r(d) : h + "[" + r(d) + "]";
          c.push(p + "=" + r(_));
        }
        f === n - 1 &&
          s.length > 0 &&
          ((f = s.pop()),
          (n = s.pop()),
          (e = s.pop()),
          (l = s.pop()),
          (h = s.pop()));
      }
      return c.join("&");
    };
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    n(7), n(12);
    var r = n(0),
      i = n.n(r),
      a =
        "// save.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\nattribute vec3 aExtra;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vExtra;\n\nvoid main(void) {\n\tvColor       = aVertexPosition;\n\tvec3 pos     = vec3(aTextureCoord, 0.0);\n\tgl_Position  = vec4(pos, 1.0);\n\t\n\tgl_PointSize = 1.0;\n\t\n\tvNormal      = aNormal;\n\tvExtra       = aExtra;\n}",
      o =
        "// save.frag\n\n#extension GL_EXT_draw_buffers : require \nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vColor;\nvarying vec3 vExtra;\n\nvoid main(void) {\n    gl_FragData[0] = vec4(vColor, 1.0);\n    gl_FragData[1] = vec4(0.0, 0.0, 0.0, 1.0);\n    gl_FragData[2] = vec4(vExtra, 1.0);\n}",
      s = {
        numParticles: 256,
        skipCount: 1,
        numSets: 4,
        maxRadius: 2,
        yRange: 12,
        background: 0.1,
        maskScale: 2.5,
        faceDetectionScale: 0.01,
        shadowStrength: 0.5
      },
      u = n(1);
    class c extends i.a.View {
      constructor() {
        super(a, o);
      }
      _init() {
        const t = [],
          e = [],
          n = [],
          a = [];
        let o = 0;
        const c = s.numParticles,
          l = c * c;
        let h, f, d, _;
        console.debug("Total Particles : ", l);
        const p = () => (
          (d = Object(u.random)(2 * Math.PI)),
          (_ = Math.sqrt(Math.random()) * s.maxRadius * 2),
          [
            Math.cos(d) * _,
            Object(u.random)(-s.yRange, s.yRange),
            Math.sin(d) * _
          ]
        );
        for (let r = 0; r < c; r++)
          for (let i = 0; i < c; i++)
            t.push(p()),
              (h = (i / c) * 2 - 1 + 0.5 / c),
              (f = (r / c) * 2 - 1 + 0.5 / c),
              a.push([
                Object(u.randomGaussian)(4),
                Object(u.randomGaussian)(4),
                Object(u.randomGaussian)(4)
              ]),
              e.push([h, f]),
              n.push(o),
              o++;
        (this.mesh = new i.a.Mesh(r.GL.POINTS)),
          this.mesh.bufferVertex(t),
          this.mesh.bufferData(a, "aExtra", 3),
          this.mesh.bufferTexCoord(e),
          this.mesh.bufferIndex(n);
      }
      render(t = 0) {
        this.shader.bind(), r.GL.draw(this.mesh);
      }
    }
    var l = c,
      h =
        "// render.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uShadowMatrix;\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform float percent;\nuniform float time;\nuniform vec2 uViewport;\n\nvarying vec4 vColor;\nvarying vec3 vNormal;\nvarying vec4 vShadowCoord;\n\nconst float radius = 0.015;\n\nvoid main(void) {\n\tvec2 uv      = aVertexPosition.xy;\n\tvec3 posCurr = texture2D(textureCurr, uv).rgb;\n\tvec3 posNext = texture2D(textureNext, uv).rgb;\n\tvec3 pos     = mix(posCurr, posNext, percent);\n\tvec3 extra   = texture2D(textureExtra, uv).rgb;\n\tvec4 wsPosition  = uModelMatrix * vec4(pos, 1.0);\n\tgl_Position  = uProjectionMatrix * uViewMatrix * wsPosition;\n\t\n\n\tfloat g \t \t= sin(extra.r + time * mix(extra.b, 1.0, .5));\n\tg \t\t\t \t\t= smoothstep(0.0, 1.0, g);\n\tg \t\t\t \t\t= mix(g, 1.0, .75);\n\tvColor      = vec4(vec3(g), 1.0);\n\n\tfloat distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;\n\tgl_PointSize = distOffset * (1.0 + extra.x * 2.5);\n\n\tvNormal \t = aNormal;\n\tvShadowCoord = uShadowMatrix * wsPosition;\n}",
      f =
        "precision highp float;\n#define GLSLIFY 1\n\nvarying vec4 vColor;\nvarying vec4 vShadowCoord;\nuniform sampler2D textureDepth;\nuniform sampler2D textureParticle;\nuniform float uBackground;\nuniform float uShadowStrength;\n\n#define uMapSize vec2(1024.0)\n#define FOG_DENSITY 0.3\n#define LIGHT_POS vec3(0.0, 10.0, 0.0)\n\nfloat rand(vec4 seed4) {\n\tfloat dot_product = dot(seed4, vec4(12.9898,78.233,45.164,94.673));\n\treturn fract(sin(dot_product) * 43758.5453);\n}\n\nfloat PCFShadow(sampler2D depths, vec2 size, vec4 shadowCoord) {\n\tfloat result = 0.0;\n\tfloat bias = 0.005;\n\tvec2 uv = shadowCoord.xy;\n\n\tfor(int x=-1; x<=1; x++){\n\t\tfor(int y=-1; y<=1; y++){\n\t\t\tvec2 off = vec2(x,y) + rand(vec4(gl_FragCoord.xy, float(x), float(y)));\n\t\t\toff /= size;\n\n\t\t\tfloat d = texture2D(depths, uv + off).r;\n\t\t\tif(d < shadowCoord.z - bias) {\n\t\t\t\tresult += 1.0;\n\t\t\t}\n\n\t\t}\n\t}\n\treturn 1.0 -result/9.0;\n\n}\n\nfloat fogFactorExp2(const float dist, const float density) {\n\tconst float LOG2 = -1.442695;\n\tfloat d = density * dist;\n\treturn 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\nfloat diffuse(vec3 N, vec3 L) {\n\treturn max(dot(N, normalize(L)), 0.0);\n}\n\nvec3 diffuse(vec3 N, vec3 L, vec3 C) {\n\treturn diffuse(N, L) * C;\n}\n\nvoid main(void) {\n\tif(distance(gl_PointCoord, vec2(.5)) > .45) discard;\n\tvec2 uv = gl_PointCoord;\n\tuv.y = 1.0 - uv.y;\n\tvec4 colorMap = texture2D(textureParticle, uv);\n\tif(colorMap.a <= 0.0) {\n\t\tdiscard;\n\t}\n\tvec3 _baseColor     = colorMap.rgb;\n\t\n\tvec4 shadowCoord    = vShadowCoord / vShadowCoord.w;\n\tfloat s             = PCFShadow(textureDepth, uMapSize, shadowCoord);\n\ts                   = mix(s, 1.0, uShadowStrength);\n\t\n\tvec4 color          = vec4(_baseColor, 1.0);\n\tcolor.rgb           *= s;\n\t\n\tfloat fogDistance   = gl_FragCoord.z / gl_FragCoord.w;\n\tfloat fogAmount     = fogFactorExp2(fogDistance - 6.0, FOG_DENSITY);\n\n\tvec4 fogColor = vec4(vec3(uBackground), 1.0);\n\t\n\tgl_FragColor        = mix(color, fogColor, fogAmount);\n}";
    class d extends i.a.View {
      constructor() {
        super(h, f), (this.time = 4095 * Math.random());
      }
      _init() {
        const t = [],
          e = [];
        let n = 0;
        const a = s.numParticles;
        let o, u;
        for (let r = 0; r < a; r++)
          for (let i = 0; i < a; i++)
            (o = i / a), (u = r / a), t.push([o, u, 0]), e.push(n), n++;
        (this.mesh = new i.a.Mesh(r.GL.POINTS)),
          this.mesh.bufferVertex(t),
          this.mesh.bufferIndex(e);
      }
      render(t, e, n, i, a, o, u) {
        (this.time += 0.1),
          this.shader.bind(),
          this.shader.uniform("textureCurr", "uniform1i", 0),
          t.bind(0),
          this.shader.uniform("textureNext", "uniform1i", 1),
          e.bind(1),
          this.shader.uniform("textureExtra", "uniform1i", 2),
          i.bind(2),
          this.shader.uniform("textureParticle", "uniform1i", 4),
          u.bind(4),
          this.shader.uniform("uShadowMatrix", "mat4", a),
          this.shader.uniform("textureDepth", "uniform1i", 3),
          o.bind(3),
          this.shader.uniform("uViewport", "vec2", [r.GL.width, r.GL.height]),
          this.shader.uniform("percent", "float", n),
          this.shader.uniform("time", "float", this.time),
          this.shader.uniform("uBackground", "float", s.background),
          this.shader.uniform("uShadowStrength", "float", s.shadowStrength),
          r.GL.draw(this.mesh);
      }
    }
    var _ = d,
      p =
        "precision highp float;\n#define GLSLIFY 1\n\nvarying vec4 vColor;\n\nvoid main(void) {\n\tif(distance(gl_PointCoord, vec2(.5)) > .5) discard;\n\n\tgl_FragColor = vec4(1.0);\n}";
    class v extends i.a.View {
      constructor() {
        super(h, p), (this.time = 4095 * Math.random());
      }
      _init() {
        let t,
          e,
          n = [],
          a = [],
          o = 0,
          u = s.numParticles;
        for (let r = 0; r < u; r++)
          for (let i = 0; i < u; i++)
            (t = i / u), (e = r / u), n.push([t, e, 0]), a.push(o), o++;
        (this.mesh = new i.a.Mesh(r.GL.POINTS)),
          this.mesh.bufferVertex(n),
          this.mesh.bufferIndex(a);
      }
      render(t, e, n, i) {
        (this.time += 0.1),
          this.shader.bind(),
          this.shader.uniform("textureCurr", "uniform1i", 0),
          t.bind(0),
          this.shader.uniform("textureNext", "uniform1i", 1),
          e.bind(1),
          this.shader.uniform("textureExtra", "uniform1i", 2),
          i.bind(2),
          this.shader.uniform("uViewport", "vec2", [r.GL.width, r.GL.height]),
          this.shader.uniform("percent", "float", n),
          this.shader.uniform("time", "float", this.time),
          r.GL.draw(this.mesh);
      }
    }
    var E = v,
      m =
        "// sim.frag\n\n#extension GL_EXT_draw_buffers : require \nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform sampler2D textureVel;\nuniform sampler2D texturePos;\nuniform sampler2D textureExtra;\nuniform sampler2D textureMask;\n\nuniform float time;\nuniform float uRadius;\nuniform float uRange;\nuniform float uAttractForce;\nuniform float uOffsetMouth;\n\nuniform vec3 uCenter;\nuniform vec3 uDir;\nuniform float uForce;\n\n// curlNoise.glsl\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\n// snoise.glsl\nvec4 permute(vec4 x) {  return mod(((x*34.0)+1.0)*x, 289.0);    }\nvec4 taylorInvSqrt(vec4 r) {    return 1.79284291400159 - 0.85373472095314 * r; }\n\nfloat snoise(vec3 v){\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n    \n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 = v - i + dot(i, C.xxx) ;\n    \n    vec3 g_0 = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g_0;\n    vec3 i1 = min( g_0.xyz, l.zxy );\n    vec3 i2 = max( g_0.xyz, l.zxy );\n    \n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n    \n    i = mod(i, 289.0 );\n    vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n    \n    float n_ = 1.0/7.0;\n    vec3  ns = n_ * D.wyz - D.xzx;\n    \n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n    \n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );\n    \n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n    \n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n    \n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n    \n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n    \n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n    \n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    \n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat snoise(float x, float y, float z){\n    return snoise(vec3(x, y, z));\n}\n\nvec3 snoiseVec3( vec3 x ){\n\n\tfloat s  = snoise(vec3( x ));\n\tfloat s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n\tfloat s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n\tvec3 c = vec3( s , s1 , s2 );\n\treturn c;\n\n}\n\nvec3 curlNoise( vec3 p ){\n\t\n\tconst float e = .1;\n\tvec3 dx = vec3( e   , 0.0 , 0.0 );\n\tvec3 dy = vec3( 0.0 , e   , 0.0 );\n\tvec3 dz = vec3( 0.0 , 0.0 , e   );\n\n\tvec3 p_x0 = snoiseVec3( p - dx );\n\tvec3 p_x1 = snoiseVec3( p + dx );\n\tvec3 p_y0 = snoiseVec3( p - dy );\n\tvec3 p_y1 = snoiseVec3( p + dy );\n\tvec3 p_z0 = snoiseVec3( p - dz );\n\tvec3 p_z1 = snoiseVec3( p + dz );\n\n\tfloat x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n\tfloat y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n\tfloat z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n\tconst float divisor = 1.0 / ( 2.0 * e );\n\treturn normalize( vec3( x , y , z ) * divisor );\n\n}\n\nvoid main(void) {\n\tvec3 pos             = texture2D(texturePos, vTextureCoord).rgb;\n\tvec3 vel             = texture2D(textureVel, vTextureCoord).rgb;\n\tvec3 extra           = texture2D(textureExtra, vTextureCoord).rgb;\n\n\tvec4 screenPos = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\tvec2 screenUV = screenPos.xy / screenPos.w * .5 + .5;\n\tvec4 colorMask = texture2D(textureMask, screenUV);\n\tvec3 posMask = colorMask.xyz;\n\n\tfloat noise \t\t \t\t = snoise(pos * 0.2 + extra * 0.15 + time * 0.15);\n\tfloat posOffset      = mix(0.01, 0.25, noise * .5 + .5);\n\tvec3 acc             = curlNoise(pos * posOffset * (1.0 + uOffsetMouth * 3.0) - time * .05) * (1.0 + uOffsetMouth * 0.5);\n\n\tacc.y *= 0.5;\n\tfloat speedOffset    = mix(extra.g, 1.0, .5);\n\tacc.y += 1.0;\n\n\tfloat d = length(pos.xz);\n\tvec2 dir = normalize(pos.xz);\n\tacc.xz -= dir * 0.08 * d;\n\n\tif(colorMask.a <= 0.0) {\n\t\tacc.z -= 0.25;\n\t}\n\n\t// face movement\n\td = distance(pos, uCenter);\n\tfloat f = smoothstep(3.0 + uOffsetMouth, 1.0 + uOffsetMouth, d);\n\tacc += uDir * f * 2.5;\n\n\tvel                  += acc * .003 * speedOffset * (1.0 + uOffsetMouth);\n\t\n\tconst float decrease = .96;\n\tvel                  *= decrease;\n\t\n\tpos                  += vel;\n\tif(colorMask.a > 0.0) {\n\t\tfloat easing = mix(0.05, 0.15, extra.z);\n\t\tpos.z += (posMask.z - pos.z) * easing * uAttractForce;\n\t}\n\n\tif(pos.y > uRange) {\n\t\tpos.y -= uRange * 2.0;\n\t\tpos.xz *= 0.75;\n\t\tvel *= 0.95;\n\t}\n\n\tgl_FragData[0] = vec4(pos, 1.0);\n\tgl_FragData[1] = vec4(vel, 1.0);\n\tgl_FragData[2] = vec4(extra, 1.0);\n}",
      T = n(2),
      b = n.n(T);
    const g = "./weights",
      y = 224,
      R = 0.5,
      { faceapi: M } = window;
    function A() {
      return !!M.nets.tinyFaceDetector.params;
    }
    class x extends b.a {
      constructor() {
        super(), (this._hasModelLoaded = !1);
      }
      init() {
        this._initWebcam(), this.startFaceDetection();
      }
      async _initWebcam() {
        const t = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "user" } });
        (this._videoEl = document.querySelector(".webcamVideo")),
          (this._videoEl.srcObject = t);
      }
      async startFaceDetection() {
        await M.loadTinyFaceDetectorModel(g),
          await M.loadFaceLandmarkModel(g),
          (this._facedetectionOption = new M.TinyFaceDetectorOptions({
            inputSize: y,
            scoreThreshold: R
          })),
          this.getFace();
      }
      async getFace() {
        const t = document.querySelector(".webcamVideo");
        if (t.paused || t.ended || !A())
          return setTimeout(() => this.getFace());
        this._hasModelLoaded ||
          ((this._hasModelLoaded = !0),
          setTimeout(() => {
            this.emit("loaded");
          }, 1500));
        const e = await M.detectSingleFace(
          this._videoEl,
          this._facedetectionOption
        ).withFaceLandmarks();
        if (e) {
          const t = e.landmarks.getMouth();
          Math.abs(t[14].y - t[18].y) > 20
            ? this.emit("mouthOpened")
            : this.emit("mouthClosed"),
            this.emit("resultMouth", t);
          const n = e.landmarks
            .getNose()
            .map(t => [
              (t.x - this.videoWidth / 2) * s.faceDetectionScale,
              (t.y - this.videoHeight / 2) * s.faceDetectionScale,
              0
            ]);
          this.emit("result", n);
        } else this.emit("lost");
        setTimeout(() => this.getFace());
      }
      get videoWidth() {
        return this._videoEl.videoWidth;
      }
      get videoHeight() {
        return this._videoEl.videoHeight;
      }
    }
    var w = new x();
    class P extends i.a.View {
      constructor() {
        super(i.a.ShaderLibs.bigTriangleVert, m),
          (this.time = 255 * Math.random());
      }
      _init() {
        (this.mesh = i.a.Geom.bigTriangle()),
          this.shader.bind(),
          this.shader.uniform("textureVel", "uniform1i", 0),
          this.shader.uniform("texturePos", "uniform1i", 1),
          this.shader.uniform("textureExtra", "uniform1i", 2),
          this.shader.uniform("textureMask", "uniform1i", 3),
          (this._attractForce = new i.a.EaseNumber(0, 0.025)),
          (this._dir = [0, 0, 0]),
          w.on("result", () => {
            setTimeout(() => {
              (this._attractForce.easing = 0.025),
                (this._attractForce.value = 1);
            }, 1e3);
          }),
          w.on("lost", () => {
            (this._dir = [0, 0, 0]),
              (this._attractForce.easing = 0.025),
              (this._attractForce.value = 0);
          }),
          (this.offsetMouth = new i.a.EaseNumber(0)),
          w.on("mouthOpened", () => {
            this.offsetMouth.value = 1;
          }),
          w.on("mouthClosed", () => {
            this.offsetMouth.value = 0;
          });
      }
      render(t, e, n, i, a, o, u) {
        (this.time += 0.01),
          this.shader.bind(),
          this.shader.uniform("time", "float", this.time),
          this.shader.uniform("uRadius", "float", s.maxRadius),
          this.shader.uniform("uRange", "float", s.yRange),
          this.shader.uniform(
            "uAttractForce",
            "float",
            this._attractForce.value
          ),
          t.bind(0),
          e.bind(1),
          n.bind(2),
          i.bind(3),
          this.shader.uniform("uCenter", "vec3", a),
          this.shader.uniform("uDir", "vec3", o),
          this.shader.uniform("uForce", "float", u),
          this.shader.uniform("uOffsetMouth", "float", this.offsetMouth.value),
          r.GL.draw(this.mesh);
      }
    }
    var O = P;
    var L = [
      { id: "mask", url: "assets/obj/mask.obj", type: "text" },
      { id: "brdfLUT", url: "assets/img/brdfLUT.png", type: "png" },
      {
        id: "studio9_irradiance",
        url: "assets/img/studio9_irradiance.dds",
        type: "binary"
      },
      {
        id: "studio9_radiance",
        url: "assets/img/studio9_radiance.dds",
        type: "binary"
      }
    ];
    const S = {};
    let I = [];
    (S.init = function() {
      let t = {};
      I = L.map(e => {
        const n = (function(t) {
            const e = t.split(".");
            return e[e.length - 1];
          })(e.url),
          a = (function(t) {
            return assets.find(e => e.id === t).file;
          })(e.id);
        let o;
        switch (n) {
          case "jpg":
          case "png":
            return (o = new r.GLTexture(a)), { id: e.id, file: o };
          case "hdr":
            let n = e.id.split("_")[0];
            o = i.a.HDRLoader.parse(a);
            const s = { id: e.id, file: o };
            return t[n] || (t[n] = []), t[n].push(s), s;
          case "dds":
            return (o = r.GLCubeTexture.parseDDS(a)), { id: e.id, file: o };
          case "obj":
            const u = r.ObjLoader.parse(a);
            return { id: e.id, file: u };
        }
      });
      for (let e in t)
        if (6 == t[e].length) {
          console.log("Generate Cubemap :", e);
          const t = [
              S.get(`${e}_posx`),
              S.get(`${e}_negx`),
              S.get(`${e}_posy`),
              S.get(`${e}_negy`),
              S.get(`${e}_posz`),
              S.get(`${e}_negz`)
            ],
            n = new i.a.GLCubeTexture(t);
          I.push({ id: e, file: n });
        }
      I.length > 0 && (console.debug("ASSETS:"), console.table(I));
    }),
      (S.get = function(t) {
        return I.find(e => e.id === t).file;
      });
    var N = S,
      C =
        "// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform float uScale;\nuniform float uRotation;\nuniform vec3 uPosition;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\nvec2 rotate(vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, s, -s, c);\n\treturn m * v;\n}\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n\tmat4 m = rotationMatrix(axis, angle);\n\treturn (m * vec4(v, 1.0)).xyz;\n}\n\nvoid main(void) {\n    vec3 pos = aVertexPosition * uScale;\n    pos.xy = rotate(pos.xy, uRotation);\n    pos += uPosition;\n    vec4 wsPosition = uModelMatrix * vec4(pos, 1.0);\n    vPosition = wsPosition.xyz;\n    gl_Position = uProjectionMatrix * uViewMatrix * wsPosition;\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}",
      F =
        "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = vec4(vPosition, 1.0);\n}";
    class U extends i.a.View {
      constructor() {
        super(C, F);
      }
      _init() {
        (this.mesh = N.get("mask")),
          w.on("result", t => this._onResult(t)),
          w.on("lost", t => this._onLost());
        (this._x = new i.a.EaseNumber(0, 0.1)),
          (this._y = new i.a.EaseNumber(0, 0.1)),
          (this._z = new i.a.EaseNumber(0, 0.05)),
          (this._rotation = new i.a.EaseNumber(0, 0.1)),
          (this.center = [0, 0, 0]),
          (this.preCenter = [0, 0, 0]);
      }
      _onResult(t) {
        const e = t[0],
          n = t[1],
          r = n[1] - e[1],
          i = n[0] - e[0],
          a = Math.atan2(r, i) - Math.PI / 2;
        (this._x.value = -n[0]),
          (this._y.value = -n[1]),
          (this._z.value = 2),
          (this._rotation.value = a);
      }
      _onLost() {
        (this._rotation.value = 0),
          (this._x.value = 0),
          (this._y.value = 0),
          (this._z.value = 0);
      }
      render() {
        (this.preCenter = this.center.concat()),
          (this.center[0] = this._x.value),
          (this.center[1] = this._y.value),
          (this.center[2] = this._z.value),
          this.shader.bind(),
          this.shader.uniform("uPosition", "vec3", this.center),
          this.shader.uniform("uScale", "float", 1 * s.maskScale),
          this.shader.uniform("uRotation", "float", this._rotation.value),
          r.GL.draw(this.mesh);
      }
    }
    var D = U,
      B =
        "#define SHADER_NAME pbr_vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform mat3 uModelViewMatrixInverse;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\nvoid main(void) {\n\tvec4 position = uModelMatrix * vec4(aVertexPosition, 1.0);\n\tvPosition     = position.xyz / position.w;\n\t\n\tvNormal       = normalize(vec3(uModelMatrix * vec4(aNormal, 0.0)));\n\tvTextureCoord = aTextureCoord;\n\t\n\tgl_Position   = uProjectionMatrix * uViewMatrix * position;\n}\n",
      k =
        "#define SHADER_NAME pbr_frag\n\n#extension GL_EXT_shader_texture_lod: enable\n#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D \tuBRDFMap;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\n#ifdef HAS_BASECOLORMAP\nuniform sampler2D uColorMap;\n#endif\n\n#ifdef HAS_OCCLUSIONMAP\nuniform sampler2D uAoMap;\nuniform float uOcclusionStrength;\n#endif\n\n#ifdef HAS_NORMALMAP\nuniform sampler2D uNormalMap;\nuniform float uNormalScale;\n#endif\n\n#ifdef HAS_EMISSIVEMAP\nuniform sampler2D uEmissiveMap;\nuniform vec3 uEmissiveFactor;\n#endif\n\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform vec3 uCameraPos;\n\nuniform vec4 uScaleDiffBaseMR;\nuniform vec4 uScaleFGDSpec;\nuniform vec4 uScaleIBLAmbient;\n\nuniform vec3 uBaseColor;\nuniform float uRoughness;\nuniform float uMetallic;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\n//\tFrom GLTF WebGL PBR :\n//\thttps://github.com/KhronosGroup/glTF-WebGL-PBR\n\n// Encapsulate the various inputs used by the various functions in the shading equation\n// We store values in this struct to simplify the integration of alternative implementations\n// of the shading terms, outlined in the Readme.MD Appendix.\nstruct PBRInfo\n{\n\tfloat NdotL;                  // cos angle between normal and light direction\n\tfloat NdotV;                  // cos angle between normal and view direction\n\tfloat NdotH;                  // cos angle between normal and half vector\n\tfloat LdotH;                  // cos angle between light direction and half vector\n\tfloat VdotH;                  // cos angle between view direction and half vector\n\tfloat perceptualRoughness;    // roughness value, as authored by the model creator (input to shader)\n\tfloat metalness;              // metallic value at the surface\n\tvec3 reflectance0;            // full reflectance color (normal incidence angle)\n\tvec3 reflectance90;           // reflectance color at grazing angle\n\tfloat alphaRoughness;         // roughness mapped to a more linear change in the roughness (proposed by [2])\n\tvec3 diffuseColor;            // color contribution from diffuse lighting\n\tvec3 specularColor;           // color contribution from specular lighting\n};\n\nconst float M_PI = 3.141592653589793;\nconst float c_MinRoughness = 0.04;\n\nvec4 SRGBtoLINEAR(vec4 srgbIn)\n{\n\t#ifdef MANUAL_SRGB\n\t#ifdef SRGB_FAST_APPROXIMATION\n\tvec3 linOut = pow(srgbIn.xyz,vec3(2.2));\n\t#else //SRGB_FAST_APPROXIMATION\n\tvec3 bLess = step(vec3(0.04045),srgbIn.xyz);\n\tvec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)), bLess );\n\t#endif //SRGB_FAST_APPROXIMATION\n\treturn vec4(linOut,srgbIn.w);;\n\t#else //MANUAL_SRGB\n\treturn srgbIn;\n\t#endif //MANUAL_SRGB\n}\n\nvec3 getNormal() {\n\tvec3 pos_dx = dFdx(vPosition);\n\tvec3 pos_dy = dFdy(vPosition);\n\tvec3 tex_dx = dFdx(vec3(vTextureCoord, 0.0));\n\tvec3 tex_dy = dFdy(vec3(vTextureCoord, 0.0));\n\tvec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);\n\n\tvec3 ng = normalize(vNormal);\n\n\tt = normalize(t - ng * dot(ng, t));\n\tvec3 b = normalize(cross(ng, t));\n\tmat3 tbn = mat3(t, b, ng);\n\n#ifdef HAS_NORMALMAP\n\tvec3 n = texture2D(uNormalMap, vTextureCoord).rgb;\n\tn = normalize(tbn * ((2.0 * n - 1.0) * vec3(uNormalScale, uNormalScale, 1.0)));\n#else\n\t// The tbn matrix is linearly interpolated, so we need to re-normalize\n\tvec3 n = normalize(tbn[2].xyz);\n#endif\n\n\treturn n;\n}\n\nvec3 getIBLContribution(PBRInfo pbrInputs, vec3 n, vec3 reflection)\n{\n\tfloat mipCount = 7.0; // resolution of 512x512\n\tfloat lod = (pbrInputs.perceptualRoughness * mipCount);\n\t// retrieve a scale and bias to F0. See [1], Figure 3\n\tvec3 brdf = SRGBtoLINEAR(texture2D(uBRDFMap, vec2(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness))).rgb;\n\tvec3 diffuseLight = SRGBtoLINEAR(textureCube(uIrradianceMap, n)).rgb;\n\n\t\n\t#ifdef USE_TEX_LOD\n\t\tvec3 specularLight = SRGBtoLINEAR(textureCubeLodEXT(uRadianceMap, reflection, lod)).rgb;\n\t    // vec3 specularLight = SRGBtoLINEAR(textureCubeLodEXT(u_SpecularEnvSampler, reflection, lod)).rgb;\n\t#else\n\t\tvec3 specularLight = SRGBtoLINEAR(textureCube(uRadianceMap, reflection)).rgb;\n\t    // vec3 specularLight = SRGBtoLINEAR(textureCube(u_SpecularEnvSampler, reflection)).rgb;\n\t#endif\n\n\tvec3 diffuse = diffuseLight * pbrInputs.diffuseColor;\n\tvec3 specular = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);\n\n\t// For presentation, this allows us to disable IBL terms\n\tdiffuse *= uScaleIBLAmbient.x;\n\tspecular *= uScaleIBLAmbient.y;\n\n\treturn diffuse + specular;\n}\n\nvec3 diffuse(PBRInfo pbrInputs)\n{\n\treturn pbrInputs.diffuseColor / M_PI;\n}\n\nvec3 specularReflection(PBRInfo pbrInputs)\n{\n\treturn pbrInputs.reflectance0 + (pbrInputs.reflectance90 - pbrInputs.reflectance0) * pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);\n}\n\nfloat geometricOcclusion(PBRInfo pbrInputs)\n{\n\tfloat NdotL = pbrInputs.NdotL;\n\tfloat NdotV = pbrInputs.NdotV;\n\tfloat r = pbrInputs.alphaRoughness;\n\n\tfloat attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));\n\tfloat attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));\n\treturn attenuationL * attenuationV;\n}\n\nfloat microfacetDistribution(PBRInfo pbrInputs)\n{\n\tfloat roughnessSq = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;\n\tfloat f = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;\n\treturn roughnessSq / (M_PI * f * f);\n}\n\nvoid main() {\n\n\tfloat perceptualRoughness   = uRoughness;\n\tfloat metallic              = uMetallic;\n\tperceptualRoughness         = clamp(perceptualRoughness, c_MinRoughness, 1.0);\n\tmetallic                    = clamp(metallic, 0.0, 1.0);\n\tfloat alphaRoughness        = perceptualRoughness * perceptualRoughness;\n\n#ifdef HAS_BASECOLORMAP\t\n\tvec4 baseColor = SRGBtoLINEAR(texture2D(uColorMap, vTextureCoord));\n#else\n\tvec4 baseColor              = vec4(uBaseColor, 1.0);\n#endif\t\n\t\n\tvec3 f0                     = vec3(0.04);\n\tvec3 diffuseColor           = baseColor.rgb * (vec3(1.0) - f0);\n\tdiffuseColor                *= 1.0 - metallic;\n\tvec3 specularColor          = mix(f0, baseColor.rgb, metallic);\n\t\n\t// Compute reflectance.\n\tfloat reflectance           = max(max(specularColor.r, specularColor.g), specularColor.b);\n\t\n\t// For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.\n\t// For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.\n\tfloat reflectance90         = clamp(reflectance * 25.0, 0.0, 1.0);\n\tvec3 specularEnvironmentR0  = specularColor.rgb;\n\tvec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;\n\t\n\tvec3 n                      = getNormal();                             // normal at surface point\n\tvec3 v                      = normalize(uCameraPos - vPosition);        // Vector from surface point to camera\n\tvec3 l                      = normalize(uLightDirection);             // Vector from surface point to light\n\tvec3 h                      = normalize(l+v);                          // Half vector between both l and v\n\tvec3 reflection             = -normalize(reflect(v, n));\n\t\n\tfloat NdotL                 = clamp(dot(n, l), 0.001, 1.0);\n\tfloat NdotV                 = abs(dot(n, v)) + 0.001;\n\tfloat NdotH                 = clamp(dot(n, h), 0.0, 1.0);\n\tfloat LdotH                 = clamp(dot(l, h), 0.0, 1.0);\n\tfloat VdotH                 = clamp(dot(v, h), 0.0, 1.0);\n\n\tPBRInfo pbrInputs = PBRInfo(\n\t\tNdotL,\n\t\tNdotV,\n\t\tNdotH,\n\t\tLdotH,\n\t\tVdotH,\n\t\tperceptualRoughness,\n\t\tmetallic,\n\t\tspecularEnvironmentR0,\n\t\tspecularEnvironmentR90,\n\t\talphaRoughness,\n\t\tdiffuseColor,\n\t\tspecularColor\n\t);\n\n\t// Calculate the shading terms for the microfacet specular shading model\n\tvec3 F              = specularReflection(pbrInputs);\n\tfloat G             = geometricOcclusion(pbrInputs);\n\tfloat D             = microfacetDistribution(pbrInputs);\n\t\n\t// Calculation of analytical lighting contribution\n\tvec3 diffuseContrib = (1.0 - F) * diffuse(pbrInputs);\n\tvec3 specContrib    = F * G * D / (4.0 * NdotL * NdotV);\n\t// Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)\n\tvec3 color          = NdotL * uLightColor * (diffuseContrib + specContrib);\n\t\n#ifdef USE_IBL\n\tcolor += getIBLContribution(pbrInputs, n, reflection);\n#endif\n\n#ifdef HAS_OCCLUSIONMAP\t\n\tfloat ao            = texture2D(uAoMap, vTextureCoord).r;\n\tcolor               = mix(color, color * ao, uOcclusionStrength);\n#endif\t\n\n#ifdef HAS_EMISSIVEMAP\n    vec3 emissive = SRGBtoLINEAR(texture2D(uEmissiveMap, vTextureCoord)).rgb * uEmissiveFactor;\n    color += emissive;\n#endif\n\t\n\t// This section uses mix to override final color for reference app visualization\n\t// of various parameters in the lighting equation.\n\tcolor               = mix(color, F, uScaleFGDSpec.x);\n\tcolor               = mix(color, vec3(G), uScaleFGDSpec.y);\n\tcolor               = mix(color, vec3(D), uScaleFGDSpec.z);\n\tcolor               = mix(color, specContrib, uScaleFGDSpec.w);\n\t\n\tcolor               = mix(color, diffuseContrib, uScaleDiffBaseMR.x);\n\tcolor               = mix(color, baseColor.rgb, uScaleDiffBaseMR.y);\n\tcolor               = mix(color, vec3(metallic), uScaleDiffBaseMR.z);\n\tcolor               = mix(color, vec3(perceptualRoughness), uScaleDiffBaseMR.w);\n\t\n\t// output the fragment color\n\tgl_FragColor        = vec4(pow(color,vec3(1.0/2.2)), baseColor.a);\n\n}";
    const V = (t, e) => {
        var n = document.createElement("a"),
          r = (t => {
            for (
              var e = t.split(","),
                n = e[0].match(/:(.*?);/)[1],
                r = atob(e[1]),
                i = r.length,
                a = new Uint8Array(i);
              i--;

            )
              a[i] = r.charCodeAt(i);
            return new Blob([a], { type: n });
          })(t.toDataURL({ format: "png", multiplier: 4 })),
          i = URL.createObjectURL(r);
        (n.download = `${e}.png`), (n.href = i), n.click();
      },
      X = t => {
        for (var e = [], n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
        return new Uint8Array(e);
      },
      j = (t, e) => {
        const { innerWidth: n, innerHeight: i } = window;
        (t = t || n), (e = e || i), r.GL.setSize(t, e);
        let a = Math.min(t, n),
          o = Math.min(e, i);
        const s = n / t,
          u = i / e,
          c = Math.min(s, u);
        (a = t * c),
          (o = e * c),
          (r.GL.canvas.style.width = `${a}px`),
          (r.GL.canvas.style.height = `${o}px`);
      },
      G = function(t) {
        let e = "";
        for (const n in t) t[n] && (e += "#define " + n + " " + t[n] + "\n");
        return e;
      },
      H = mat4.fromValues(
        0.5,
        0,
        0,
        0,
        0,
        0.5,
        0,
        0,
        0,
        0,
        0.5,
        0,
        0.5,
        0.5,
        0.5,
        1
      );
    class Y extends r.FrameBuffer {
      constructor() {
        const t = {
            USE_TEX_LOD: r.GL.getExtension("EXT_shader_texture_lod") ? 1 : 0,
            USE_IBL: 1,
            HAS_BASECOLORMAP: 0,
            HAS_NORMALMAP: 0,
            HAS_EMISSIVEMAP: 0,
            HAS_OCCLUSIONMAP: 0
          },
          e = G(t),
          n = `${e}\n${B}`,
          a = `${e}\n${k}`;
        super(64, 64, { minFilter: r.GL.LINEAR, magFilter: r.GL.LINEAR });
        const o = N.get("studio9_radiance"),
          s = N.get("studio9_irradiance"),
          u = new r.CameraPerspective();
        u.setPerspective((45 * Math.PI) / 180, 1, 0.1, 100),
          u.lookAt([5, 0, 0], [0, 0, 0]);
        const c = i.a.Geom.sphere(1.8, 36),
          l = new i.a.GLShader(n, a);
        this.bind(),
          r.GL.clear(0, 0, 0, 0),
          r.GL.setMatrices(u),
          l.bind(),
          l.uniform("uBRDFMap", "uniform1i", 0),
          N.get("brdfLUT").bind(0),
          l.uniform("uRadianceMap", "uniform1i", 1),
          o.bind(1),
          l.uniform("uIrradianceMap", "uniform1i", 2),
          s.bind(2),
          l.uniform("uBaseColor", "uniform3fv", [1, 1, 1]),
          l.uniform("uRoughness", "uniform1f", 0.85),
          l.uniform("uMetallic", "uniform1f", 0.4),
          l.uniform("uLightDirection", "vec3", [0, 10, 0]),
          l.uniform("uLightColor", "vec3", [1, 1, 1]),
          l.uniform("uScaleDiffBaseMR", "vec4", [0, 0, 0, 0]),
          l.uniform("uScaleFGDSpec", "vec4", [0, 0, 0, 0]),
          l.uniform("uScaleIBLAmbient", "vec4", [1, 1, 1, 1]),
          l.uniform("uCameraPos", "vec3", [5, 0, 0]),
          l.uniform("uOcclusionStrength", "float", 1),
          r.GL.draw(c),
          this.unbind();
      }
    }
    var q = Y;
    window.getAsset = function(t) {
      return assets.find(e => e.id === t).file;
    };
    const z = [0, 10, 2];
    class W extends i.a.Scene {
      constructor() {
        super(),
          this.resize(),
          r.GL.enableAlphaBlending(),
          (this._count = 0),
          this.camera.setPerspective(Math.PI / 2, r.GL.aspectRatio, 0.1, 50),
          (this.orbitalControl.radius.value = 10),
          this.orbitalControl.radius.limit(10, 10),
          this.orbitalControl.lock(),
          (this._cameraLight = new i.a.CameraOrtho());
        this._cameraLight.ortho(-7, 7, 7, -7, 1, 50),
          this._cameraLight.lookAt(z, [0, 0, 0]),
          (this._shadowMatrix = mat4.create()),
          mat4.multiply(
            this._shadowMatrix,
            this._cameraLight.projection,
            this._cameraLight.viewMatrix
          ),
          mat4.multiply(this._shadowMatrix, H, this._shadowMatrix),
          (this._debugPoints = []),
          w.on("resultMouth", t => {
            this._debugPoints = t.map(t => [t.x, t.y, 0]);
          }),
          this.cameraOrtho.ortho(0, r.GL.width, 0, r.GL.height);
      }
      _initTextures() {
        console.log("init textures");
        const t = s.numParticles,
          e = {
            minFilter: r.GL.NEAREST,
            magFilter: r.GL.NEAREST,
            type: r.GL.FLOAT,
            mipmap: !1
          };
        this._fbos = [];
        let n = s.numSets;
        for (; n--; ) this._fbos.push(new r.FboPingPong(t, t, e, 3));
        this._fbos.forEach(t => {
          (t.read.getTexture(0).minFilter = r.GL.NEAREST),
            (t.read.getTexture(0).magFilter = r.GL.NEAREST),
            (t.write.getTexture(0).minFilter = r.GL.NEAREST),
            (t.write.getTexture(0).magFilter = r.GL.NEAREST);
        }),
          (this._fboShadow = new i.a.FrameBuffer(1024, 1024, {
            minFilter: r.GL.LINEAR,
            magFilter: r.GL.LINEAR
          })),
          (this._textureParticle = new q());
        this._fboMask = new i.a.FrameBuffer(r.GL.width, r.GL.height, {
          type: r.GL.FLOAT,
          minFilter: r.GL.LINEAR,
          magFilter: r.GL.LINEAR
        });
      }
      _initViews() {
        console.log("init views"),
          (this._bCopy = new i.a.BatchCopy()),
          (this._bAxis = new i.a.BatchAxis()),
          (this._bBall = new i.a.BatchBall()),
          (this._vRender = new _()),
          (this._vRenderShadow = new E()),
          (this._vSim = new O()),
          (this._vMask = new D()),
          this._fbos.forEach(t => {
            (this._vSave = new l()),
              t.read.bind(),
              r.GL.clear(0, 0, 0, 0),
              this._vSave.render(),
              t.read.unbind();
          }),
          r.GL.setMatrices(this.camera);
      }
      updateFbo() {
        const { vec3: t } = window,
          e = t.create();
        t.sub(e, this._vMask.center, this._vMask.preCenter);
        const n = t.length(e);
        r.GL.setMatrices(this.camera),
          this._fbos.forEach(t => {
            t.write.bind(),
              r.GL.clear(0, 0, 0, 1),
              this._vSim.render(
                t.read.getTexture(1),
                t.read.getTexture(0),
                t.read.getTexture(2),
                this._fboMask.texture,
                this._vMask.center,
                e,
                n
              ),
              t.write.unbind(),
              t.swap();
          });
      }
      _renderParticles() {
        const t = this._count / s.skipCount;
        this._fbos.forEach(e => {
          this._vRender.render(
            e.write.getTexture(0),
            e.read.getTexture(0),
            t,
            e.read.getTexture(2),
            this._shadowMatrix,
            this._fboShadow.getDepthTexture(),
            this.textureParticle
          );
        });
      }
      _renderShadowMap() {
        this._fboShadow.bind(),
          r.GL.clear(0, 0, 0, 0),
          r.GL.setMatrices(this._cameraLight);
        const t = this._count / s.skipCount;
        this._fbos.forEach(e => {
          this._vRenderShadow.render(
            e.read.getTexture(0),
            e.read.getTexture(0),
            t,
            e.read.getTexture(2)
          );
        }),
          this._fboShadow.unbind();
      }
      update() {
        this._fboMask.bind(),
          r.GL.clear(0, 0, 0, 0),
          this._vMask.render(),
          this._fboMask.unbind();
      }
      render() {
        this._count++,
          this._count % s.skipCount == 0 &&
            ((this._count = 0), this.updateFbo()),
          this._renderShadowMap();
        const t = s.background;
        r.GL.clear(t, t, t, 1),
          r.GL.setMatrices(this.camera),
          this._renderParticles();
      }
      resize(t, e) {
        j(t, e), this.camera.setAspectRatio(r.GL.aspectRatio);
      }
      get textureParticle() {
        return this._textureParticle.getTexture();
      }
    }
    var K = W,
      Z = n(6),
      Q = n.n(Z),
      $ = n(3),
      J = n.n($);
    J.a.queryString = n(22);
    let tt = !0;
    const et = () => {
      tt &&
        window.history.pushState(
          "experiment",
          "Title",
          window.location.origin +
            window.location.pathname +
            "?config=" +
            JSON.stringify(s)
        );
    };
    let nt = -1;
    var rt = {
      enabled: tt,
      reset: () => {
        tt &&
          (window.location.href =
            window.location.origin + window.location.pathname);
      },
      reload: () => {
        tt &&
          (window.location.href =
            window.location.origin +
            window.location.pathname +
            "?config=" +
            JSON.stringify(s));
      },
      refresh: et,
      delayReload: () => {
        tt &&
          (window.clearTimeout(nt),
          (nt = window.setTimeout(() => {
            window.location.href =
              window.location.origin +
              window.location.pathname +
              "?config=" +
              JSON.stringify(s);
          }, 500)));
      },
      init: (t = !0) => {
        tt = t;
        const e = J.a.parse(window.location.search, !0);
        if (e.query.config) {
          const t = JSON.parse(e.query.config);
          for (let e in t) s[e] = t[e];
        }
        console.log("Config :", s), et();
      }
    };
    String.prototype.replaceAll = function(t, e) {
      return this.replace(new RegExp(t, "g"), e);
    };
    window.addEventListener("keydown", t => {
      if (83 === t.keyCode && t.metaKey) {
        t.preventDefault();
        const e = new Date();
        let n =
          `${e.getFullYear()}.` +
          `${e.getMonth() + 1}.` +
          `${e.getDate()}-` +
          `${e.getHours()}.` +
          `${e.getMinutes()}.` +
          `${e.getSeconds()}`;
        V(r.GL.canvas, n);
      }
    });
    var it = t => {
      const e = {
        save: () => {
          ((t, e = "dagta", n = !0) => {
            var r = n ? JSON.stringify(t, null, 4) : JSON.stringify(t),
              i = X(r),
              a = new Blob([i], { type: "application/octet-stream" }),
              o = URL.createObjectURL(a),
              s = document.createElement("a");
            s.setAttribute("href", o), s.setAttribute("download", `${e}.json`);
            var u = document.createEvent("MouseEvents");
            u.initMouseEvent(
              "click",
              !0,
              !0,
              window,
              1,
              0,
              0,
              0,
              0,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            ),
              s.dispatchEvent(u);
          })(s, "Settings");
        }
      };
      setTimeout(() => {
        gui
          .add(s, "numParticles", 10, 1024)
          .step(1)
          .onFinishChange(rt.reload),
          gui
            .add(s, "numSets", 1, 10)
            .step(1)
            .onFinishChange(rt.reload),
          gui
            .add(s, "yRange", 5, 20)
            .step(1)
            .onFinishChange(rt.refresh),
          gui.add(s, "maxRadius", 1, 5).onFinishChange(rt.refresh),
          gui.add(s, "background", 0, 1).onFinishChange(rt.refresh),
          gui.add(s, "shadowStrength", 0, 1).onFinishChange(rt.refresh),
          gui.add(s, "maskScale", 1, 4).onFinishChange(rt.refresh),
          gui.add(e, "save").name("Save Settings"),
          gui.add(rt, "reset").name("Reset Default");
      }, 500);
    };
    function at() {
      if (L.length > 0) {
        document.body.classList.add("isLoading");
        new Q.a({ assets: L })
          .on("error", t => {
            console.log("Error :", t);
          })
          .on("progress", t => {
            const e = document.body.querySelector(".Loading-Bar");
            e && (e.style.width = `${100 * t}%`);
          })
          .on("complete", ot)
          .start();
      } else st();
    }
    function ot(t) {
      console.log("Image Loaded : ", t), (window.assets = t);
      const e = document.body.querySelector(".Loading-Bar");
      console.log("Loader :", e),
        (e.style.width = "100%"),
        w.on("loaded", st),
        w.init();
    }
    function st() {
      document.body.classList.remove("hideHint"),
        setTimeout(() => {
          document.body.classList.remove("isLoading");
        }, 250),
        console.log("IS_DEVELOPMENT", !!window.isDevelopment),
        window.isDevelopment && rt.init();
      const t = document.createElement("canvas"),
        e = document.body.querySelector(".container");
      (t.className = "Main-Canvas"),
        e.appendChild(t),
        r.GL.init(t, { ignoreWebgl2: !0, preserveDrawingBuffer: !0 }),
        N.init();
      const n = new K();
      window.isDevelopment && it(n),
        setTimeout(() => {
          document.body.classList.contains("hideHint") ||
            document.body.classList.add("hideHint");
        }, 2e3),
        window.addEventListener("keydown", t => {
          32 === t.keyCode &&
            (document.body.classList.contains("showWebcam")
              ? document.body.classList.remove("showWebcam")
              : (document.body.classList.add("showWebcam"),
                document.body.classList.contains("hideHint") ||
                  document.body.classList.add("hideHint")));
        });
    }
    document.body ? at() : window.addEventListener("DOMContentLoaded", at);
  }
]);
