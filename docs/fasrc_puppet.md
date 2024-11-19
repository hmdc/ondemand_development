### FASRC Puppet YAML Hierarchy
```yaml
hierarchy:
- name: "Secret data (encrypted)"
  lookup_key: eyaml_lookup_key
  paths:
    - "nodes/%{trusted.certname}.yaml"
    - "secrets/%{trusted.certname}.yaml"
    - "nodes/%{hostname}.yaml"
    - "secrets/%{hostname_base}.yaml"
    - "nodes/%{hostname_base}.yaml"
    - "ib_islands/%{::ib_island}.yaml"
    - "vlans/%{vlan}.yaml"
    - "vlans/%{vlan}_%{facts.os.family}_%{facts.os.release.major}.yaml"
    - "cluster/%{cluster}.yaml"
    - "groups/%{group}.yaml"
    - "kempner_%{kempner}.yaml"
    - "datacenter/%{datacenter}/proxy_%{needs_proxy}.yaml"
    - "datacenter/%{datacenter}.yaml"
    - "security_level/level%{security_level}/%{facts.os.family}/%{facts.os.release.major}.yaml"
    - "os/%{facts.os.family}.yaml"
    - "os/%{facts.os.family}/%{facts.os.release.major}.yaml"
    - 'common/mounts.yaml'
    - "common/is_virtual_%{is_virtual}.yaml"
    - 'common/common.yaml'
    - "secrets/common.yaml"
```