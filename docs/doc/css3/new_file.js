define(["app", "jquery", "lodash", "ngDraggable", "jqueryIndexeddb", "resources/ChatResource", "resources/ContactsResource", "resources/ConversationResource", "resources/SaasResource", "resources/AddressResource", "services/UserService", "services/TipsService", "services/RedPackageService", "services/CustomerService", "services/DBService", "services/utils/RobotService", "services/NotificationService", "services/EmotionService", "services/MessageBox", "services/NativeService", "services/common/CacheService", "services/utils/IswUtils", "directives/BindHtml", "directives/InfiniteScroll", "directives/NgContextMenu", "filters/Moment", "filters/cut", "filters/one"], function(e, t, i) {
	"use strict";

	function o(e, o, n, r, a, u, d, l, p, f, I, v, h, g, m, y, V, x, T, b, C, S, N) {
		function U() {
			n(function() {
				e.listStyle = {
					height: r.document.documentElement.clientHeight - 61
				}
			})
		}

		function k() {
			if(e.list && e.list.length > 0) {
				var t = i.findIndex(e.list, function(e) {
					return e.topicId === y.getSelectTopicId()
				});
				t == -1 && (t = 0), e.select(e.list[t])
			}
		}

		function w() {
			K++, l.queryRecentContacts(K, 20).success(function(t) {
				for(var o = 0; o < t.length; o++) {
					var c = i.findIndex(e.list, function(e) {
						return e.topicId === t[o].topicId
					});
					c != -1 && t.splice(o, 1)
				}
				angular.forEach(t, function(e) {
					e.msgAlert || x.msgnoalertlist.unshift(e.topicId), "0001" == e.converVo.contactsId && (x.serviceTopicId = e.topicId)
				});
				for(var o = 0; o < t.length; o++) e.list.push(t[o])
			})
		}

		function R(e) {
			return c.test(e) ? 1 : 0
		}

		function $(t) {
			var o = i.findIndex(e.list, function(e) {
				if(e && e.converVo && 1 == e.converVo.topicType) return e.converVo.contactsId == t
			});
			if(o != -1) {
				var c = e.list[o];
				return e.list.splice(o, 1), c.isFixTop = !0, e.list.unshift(c), !0
			}
			return !1
		}

		function P(t) {
			var o = {
				userId: t
			};
			l.query(o, null, 1).then(function(o) {
				var c = i.findIndex(o.participants, function(e) {
						if(e && e.userId) return e.userId == t
					}),
					s = o.participants[c];
				if(s.userName) {
					var n = {};
					n.converVo = {
						contactsId: s.userId,
						contactsName: s.userName,
						topicPicId: s.userPicId,
						topicType: 1
					}, n.isFixTop = !0, n.participants = o.participants, n.dialogueVo = o.dialogues && o.dialogues[0], n.topicId = o.topicId, e.list.unshift(n)
				}
			})
		}

		function M(e) {
			return i.filter(e, function(e) {
				return e.dialogueVo && 0 === e.dialogueVo.dialogueType && (e.dialogueVo.dialogueInfo = B(e.dialogueVo.dialogueInfo)), 8 !== e.converVo.topicType
			})
		}

		function A() {
			var t = e.getCurrentContact();
			t && (t.noReadNum = 0)
		}

		function D() {
			var t = e.getCurrentContact();
			if(t) return t.noReadNum || 0
		}

		function q(t) {
			var o = i.findIndex(e.list, function(e) {
					return e.topicId === t
				}),
				c = e.getCurrentContact();
			e.list[o] && (e.list.splice(o, 1), I.removeConverContact(t)), c.topicId === t ? o < e.list.length ? e.select(e.list[o]) : e.select(e.list[o - 1]) : e.$apply()
		}

		function E() {
			var t = e.search.value;
			if(t) {
				t = t.replace(/\s+/g, "");
				var i = t.match(Z);
				if(i || 1 != !i.length || !i[0] !== e.search.value) {
					if(G.test(t)) return void l.queryUserContactsLikeMobile(e.search.value).success(function(t) {
						e.search.list = t, t.length > 0 && (e.search.focusUserId = e.search.list[0].userId)
					});
					var c = [];
					c.push(l.queryContactsPromise(e.search.value)), c.push(S.searchAdderssLikePostName(e.search.value)), c.push(S.queryUsersByLabelName(e.search.value)), o.all(c).then(function(t) {
						var i = [];
						t.forEach(function(e) {
							e.userList && e.userList.length > 0 ? i = i.concat(e.userList) : e.length > 0 && (i = i.concat(e))
						}), e.search.list = i, i.length > 0 && (e.search.focusUserId = e.search.list[0].userId)
					})
				}
			}
		}

		function L(o, c, s) {
			var n = i.findIndex(e.list, function(e) {
					return e.topicId === o
				}),
				r = F(c, o, s);
			if(r.dialogueVo && r.dialogueVo.dialogueInfo && r.dialogueVo.dialogueInfo.indexOf("Ù¨Ñ*ã¨") > -1) {
				var a = i.findIndex(x.msgnoalertlist, function(e) {
					return e == o
				});
				a == -1 && (b.shake(3, 8, 50), r.isShake = !0)
			} else r.isShake = !1;
			return n > 0 && e.list.splice(n, 1), 0 !== n ? e.list.unshift(r) : 0 === n && t.extend(!0, e.list[0], r), r.converVo && 1 == r.converVo.topicType && c.userPicId && (c.userId != e.loginUser.userId && r.converVo.topicPicId != c.userPicId && (r.converVo.topicPicId = c.userPicId, e.$broadcast("chat-userpicId-change", c)), n == -1 && r.converVo.contactsId == e.loginUser.userId && (r.converVo.topicPicId = r.converVo.reciverUserPicId, r.converVo.contactsName = r.converVo.reciverUserName)), e.setfixtop(r), r
		}

		function F(t, o, c) {
			var s = i.find(e.list, function(e) {
				return e.topicId === o
			});
			return "undefined" != typeof s ? (s.dialogueVo = {
				createDate: t.createDate,
				dialogueInfo: B(t.dialogueInfo),
				dialogueType: t.dialogueType,
				expressionType: R(t.dialogueInfo),
				userId: t.userId,
				userName: t.userName,
				userPicId: t.userPicId
			}, angular.isDefined(c) && c && (s.converVo = s.converVo, s.dialogueVo.createDate = (new Date).getTime()), s.converVo && 1 != s.converVo.topicType && t.converTopicVo && t.converTopicVo.contactsName && s.converVo.contactsName != t.converTopicVo.contactsName && (s.converVo.contactsName = t.converTopicVo.contactsName, x.$bus.publish({
				channel: "event.update.title",
				topic: "updateTopicName",
				data: {
					topicId: s.topicId,
					topicName: s.converVo.contactsName
				}
			})), s.topicId = o) : (s = {
				converVo: t.converTopicVo,
				topicId: t.topicId,
				dialogueVo: {
					createDate: t.createDate,
					dialogueInfo: B(t.dialogueInfo),
					dialogueType: t.dialogueType,
					expressionType: R(t.dialogueInfo),
					userId: t.userId,
					userName: t.userName,
					userPicId: t.userPicId
				}
			}, s.msgAlert = !0), s
		}

		function B(e) {
			return H.test(e) && (e = e.replace(/@\&@/g, " ")), e
		}

		function z(t) {
			if(2 !== t.sendType) {
				var o = L(t.topicId, t);
				if(a.params.id === t.topicId) return void v.setConversationReaded(t.topicId, !1);
				t.atUserId && t.atUserId.length > 0 && i.includes(t.atUserId, e.loginUser.userId) && (o.atMessageFlag = !0), 0 === t.sendType && (o.noReadNum = o.noReadNum || 0, o.noReadNum++)
			}
		}
		e.loginUser = m.getCurrentUser(), x.msgnoalertlist = [], e.atMessageInfo = {}, U(), r.addEventListener("resize", i.throttle(U, 300)), V.get("userSettings", e.loginUser.userId).then(function(t) {
			t && (e.sendKey = t.sendChatKey)
		}), e.setSendKey = function(t) {
			e.sendKey = t, V.get("userSettings", e.loginUser.userId).then(function(i) {
				i || (i = {
					userId: e.loginUser.userId
				}), i.sendChatKey = t, V.saveOrUpdate("userSettings", i)
			})
		}, e.scrollHandler = w;
		var K = 1;
		n(function() {
			l.queryRecentContacts(K, 20).success(function(t) {
				e.list = M(t), angular.forEach(e.list, function(e) {
					e.msgAlert || x.msgnoalertlist.unshift(e.topicId), "0001" == e.converVo.contactsId && (x.serviceTopicId = e.topicId), e.dialogueVo && (e.dialogueVo.expressionType = R(e.dialogueVo.dialogueInfo))
				}), "home.chat" === a.current.name && k(), s.forEach(function(e) {
					var t = $(e);
					t || P(e)
				})
			})
		}, 30), e.$on("chat.delete.self", function(e, t) {
			q(t)
		}), e.$on("$stateChangeSuccess", function(e, t) {
			"home.chat" === t.name && k()
		}), e.$on("event.uploadtopicImage.success", function(t, i) {
			var o = e.getCurrentContact();
			o && o.converVo && (o.converVo.topicPicId = i.fileId), t.stopPropagation()
		}), e.$bus.subscribe({
			channel: "event.change.route",
			topic: "currentUrl",
			callback: function(e) {
				"news" == e.currentUrl && A()
			}
		});
		var j, H = /@&@([a-zA-Z0-9\u4e00-\u9fa5]+)@&@/g;
		e.highlight = function(t) {
			e.selectedTopicId !== t && (e.selectedTopicId = t, y.setSelectTopicId(e.selectedTopicId), j = null)
		}, e.select = function(t) {
			e.highlight(t.topicId), t.atMessageFlag = !1, t.isShake = !1, a.go("home.chat.msg", {
				id: t.topicId,
				readMore: D() <= 5
			}), window.trayState = 0
		}, e.$on("event.chat.selectTopic", function(t, i) {
			v.setConversationReaded(i.topicId, !0), e.select(i), A()
		}), e.setfixtop = function(t) {
			var o = i.findIndex(e.list, function(e) {
					return e.topicId === t.topicId
				}),
				c = e.list[o];
			e.list.splice(o, 1);
			var n, r = i.findLastIndex(e.list, function(e) {
				return e.isTop
			});
			t.isTop && (r = -1), angular.forEach(e.list, function(e, i) {
				e.isTop == t.isTop && e.dialogueVo && e.dialogueVo.createDate > c.dialogueVo.createDate && ("undefined" == typeof n || e.dialogueVo.createDate < n.dialogueVo.createDate) && (n = e, r = i)
			}), e.list.splice(r + 1, 0, c), s.forEach(function(e) {
				$(e)
			})
		};
		var O = "63634f8844714aaebcb887fbc8af6782";
		e.contextMenu = function(o, c) {
			t(function() {
				function t() {
					var t = c.msgAlert ? "O=o" : "ÖO=",
						o = c.isTop ? "Önv" : "nvÝ",
						n = c.isFavoriteConver ? "Ö6Ï" : "6Ï¤Ä",
						r = require("nw.gui"),
						a = new r.Menu,
						u = new r.MenuItem({
							label: o,
							click: function() {
								e.$apply(function() {
									c.isTop = !c.isTop
								}), v.setConverTop(c.topicId, c.isTop ? 1 : 0), e.setfixtop(c), e.$apply()
							}
						}),
						d = new r.MenuItem({
							label: n,
							click: function() {
								I.setFavoriteConver(c.topicId, 0 == c.isFavoriteConver ? 1 : 0).success(function() {
									var t = i.findIndex(e.list, function(e) {
										return e.topicId === c.topicId
									});
									e.list[t] && (e.list[t].isFavoriteConver = 0 == c.isFavoriteConver ? 1 : 0), g.show("¾n")
								})
							}
						}),
						l = new r.MenuItem({
							label: " dÝ",
							click: function() {
								q(c.topicId)
							}
						}),
						p = new r.MenuItem({
							label: t,
							click: function() {
								if(c.msgAlert !== !0) {
									c.msgAlert = !0;
									var t = i.findIndex(e.msgnoalertlist, function(e) {
										return c.topicId == e
									});
									x.msgnoalertlist.splice(t, 1)
								} else c.msgAlert = !1, x.msgnoalertlist.unshift(c.topicId);
								I.getOneUserSetting(O, c.topicId).success(function(t) {
									"" != t ? t.messageAlert = c.msgAlert : t = {
										userId: e.loginUser.userId,
										appId: O,
										topicId: c.topicId,
										messageAlert: c.msgAlert
									}, I.saveUserSetting(t).error(function(e, t) {
										g.show("O=1%  " + e + "  " + t)
									})
								}), e.$apply()
							}
						});
					return i.includes(s, c.converVo.contactsId) || (a.append(u), a.append(l)), 2 === c.converVo.topicType && a.append(d), a.append(p), a
				}
				var n = new t;
				n.popup(o.originalEvent.x, o.originalEvent.y)
			})
		}, e.dropComplete = function() {
			var e = arguments[1],
				t = arguments[2],
				i = p.confirmResult({
					msg: '/&åoÑÙ"' + e.converVo.contactsName + '"',
					header: "Ñn¤",
					yesButton: "Ñ",
					noButton: "KÑ"
				});
			i.result.then(function(i) {
				if("yes" === i) {
					var o = [],
						c = [],
						s = [];
					switch(e.converVo.topicType) {
						case 1:
							o.push(e.converVo.contactsId);
							break;
						case 2:
							s.push(e.topicId);
							break;
						case 3:
							c.push(e.converVo.contactsId)
					}
					t.isForward = !0, x.$bus.publish({
						channel: "event.chat.msg",
						topic: "forward",
						data: {
							userIds: o,
							groupIds: c,
							topicIds: s,
							message: t,
							messageType: t.dialogueType
						}
					})
				}
			})
		}, e.getCurrentContact = function() {
			return j ? j : y.getSelectTopicId() ? j = i.find(e.list, function(e) {
				return e.topicId === y.getSelectTopicId()
			}) : null
		}, e.search = {
			focusUserId: "",
			idx: 0
		}, e.trySearch = i.debounce(E, 500);
		var Z = /([a-zA-Z0-9\u4e00-\u9fa5]+)/g,
			G = /^1\d+/,
			H = /@&@([a-zA-Z0-9\u4e00-\u9fa5]+)@&@/g;
		e.enter = function(i) {
			if(13 == i.keyCode) {
				if(0 == e.search.list.length) return;
				e.search.idx === e.search.list.length && e.search.idx--, e.selectSearch(e.search.list[e.search.idx])
			} else 38 == i.keyCode ? (e.search.idx > 1 && (e.search.idx = e.search.idx - 1, e.search.focusUserId = e.search.list[e.search.idx].userId), t(".chat-search-list").scrollTop(60 * e.search.idx), e.search.focusUserId = e.search.list[e.search.idx].userId) : 40 == i.keyCode ? e.search.idx < e.search.list.length && (e.search.idx++, e.search.list[e.search.idx] && (t(".chat-search-list").scrollTop(60 * e.search.idx), e.search.focusUserId = e.search.list[e.search.idx].userId)) : 27 == i.keyCode && e.hideSearchList()
		}, e.selectSearch = function(t) {
			if(t) {
				if(t.userId === e.loginUser.userId) return void g.show("Ùêñµ/WCollaboration Creativity	ö ©Kæ¨ïå(");
				var o = {
					userId: t.userId
				};
				l.query(o, null, 1).then(function(t) {
					a.go("home.chat.msg", {
						id: t.topicId,
						readMore: D() <= 5
					}), e.hideSearchList();
					var o = i.findIndex(t.participants, function(t) {
							return t.userId != e.loginUser.userId
						}),
						c = {
							converTopicVo: {
								contactsId: t.participants[o].userId,
								contactsName: t.participants[o].userName,
								topicPicId: t.participants[o].userPicId,
								topicType: 1
							},
							topicId: t.topicId,
							userId: t.participants[o].userId,
							userName: t.participants[o].userName,
							userPicId: t.participants[o].userPicId,
							topicItemId: ""
						};
					L(t.topicId, c, !1)
				})
			}
		}, e.$on("document.click", function() {
			e.hideSearchList()
		}), e.hideSearchList = function() {
			e.search.list = [], e.search.focusUserId = "", e.search.idx = 0, e.search.value = ""
		}, e.updateIndex = function(e, t, i) {
			2 !== t.sendType && L(e, t, i)
		}, e.$bus.subscribe({
			channel: "event.update.title",
			topic: "topicName",
			callback: function(t) {
				var o = i.findIndex(e.list, function(e) {
					return e.topicId === t.topicId
				});
				e.list[o].converVo.contactsName = t.topicName
			}
		}), e.$bus.subscribe({
			channel: "websocket",
			topic: "Conversation",
			callback: function(t) {
				if(t && e.list && (setTimeout(function() {
						x.$bus.publish({
							channel: "websocket",
							topic: "Conversation-after",
							data: t
						})
					}, 200), "msg" === t.content)) {
					var i = t.extras;
					C.pushConversationCache(i), n(function() {
						z(i)
					}, 0)
				}
			}
		}), e.$bus.subscribe({
			channel: "websocket",
			topic: "RemindMessage",
			callback: function(e) {
				if(e && e.extras && e.extras.title) {
					var t = e.extras.title.split("||"),
						i = {};
					i.html = t[0], i.width = parseInt(t[1]), i.height = parseInt(t[2]), t.length >= 4 && (i.onclick = t[3]), T.showNotify(i), f.notified(e.extras.topicItemId, 0)
				}
			}
		}), e.$bus.subscribe({
			channel: "websocket",
			topic: "readMessage",
			callback: function(t) {
				if(t && t.extras && t.extras.topicId) {
					var o = t.extras.topicId,
						c = i.findIndex(e.list, function(e) {
							return e.topicId === o
						});
					c != -1 && setTimeout(function() {
						e.list[c].noReadNum = 0, e.$apply()
					}, 0)
				}
			}
		}), e.$bus.subscribe({
			channel: "websocket",
			topic: "RetractDirective",
			callback: function(t) {
				if(t && e.list && t && t.extras && t.extras.topicId && t.extras.topicItemId) {
					var o, c = t.extras,
						s = i.findIndex(e.list, function(e) {
							return e.topicId === c.topicId
						});
					s >= 0 && (o = angular.copy(e.list[s]), e.list.splice(s, 1), o.dialogueVo.dialogueInfo = c.dialogueInfo, e.$apply(function() {
						o.noReadNum > 0 && o.noReadNum--, e.list.unshift(o), e.setfixtop(o)
					}), C.pushConversationCache(c)), a.params.id === c.topicId && e.$broadcast("event.chat.retract", c)
				}
			}
		}), t("#search-box").on("paste", function(e) {
			e.stopPropagation()
		}), window.isCustomerServiceVersion() ? setTimeout(function() {
			v.query({
				userId: u.getCiCi().userId
			}, null, 1).success(function(e) {
				a.go("home.chat.msg", {
					id: e.topicId,
					readMore: D() <= 5
				}), d.init(function(t) {
					var i = {
						topicId: e.topicId,
						dialogueInfo: "åâî" + t,
						dialogueType: 0
					};
					l.sendAutoReplyMessage(i).success(function(e) {})
				})
			})
		}, 1e3) : setTimeout(function() {
			null != d.getValue(void 0, "userId") && v.query({
				userId: d.getValue(void 0, "userId")
			}, null, 1).success(function(e) {
				a.go("home.chat.msg", {
					id: e.topicId,
					readMore: D() <= 5
				}), d.init(function(e) {
					v.query({
						userId: d.getValue(void 0, "userId")
					}, null, 1).success(function(e) {
						a.go("home.chat.msg", {
							id: e.topicId,
							readMore: D() <= 5
						})
					})
				})
			})
		}, 1e3)
	}
	var c = /\[mdd|ele-\d{0,3}\]/,
		s = ["e97be413e6cb495c8e83637eea98d6e8"],
		n = ["$scope", "$q", "$timeout", "$window", "$state", "RobotService", "CustomerService", "ChatResource", "MessageBox", "SaasResource", "ContactsResource", "ConversationResource", "EmotionService", "TipsService", "UserService", "IswUtils", "DBService", "$rootScope", "NotificationService", "NativeService", "CacheService", "AddressResource", "RedPackageService"];
	o.$inject = n, e.lazy.controller("ChatController", o)
});