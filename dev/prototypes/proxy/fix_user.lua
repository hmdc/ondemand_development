-- Apache Config
-- SetEnv OOD_FIXED_USER "proxy"
-- LuaHookFixups fix_user.lua set_user
--
-- Script location in OOD
-- /opt/ood/mod_ood_proxy/lib/fix_user.lua
function set_user(r)
  local fixed_user = apache2.env["OOD_FIXED_USER"]
  r.user = fixed_user
  return apache2.DECLINED  -- Indicate that the request is processed successfully
end