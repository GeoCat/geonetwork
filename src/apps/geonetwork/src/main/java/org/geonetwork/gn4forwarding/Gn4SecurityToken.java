/*
 * (c) 2003 Open Source Geospatial Foundation - all rights reserved
 * This code is licensed under the GPL 2.0 license,
 * available at the root application directory.
 */
package org.geonetwork.gn4forwarding;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import org.geonetwork.domain.Profile;
import org.springframework.security.core.GrantedAuthority;

/**
 * very simple class (for JSON) for the information being sent to GN4's JWT Header. Does some conversions for the
 * userGroupProfiles ("groupname:profile"). Determines the "max" profile for the generic user.profile.
 */
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Gn4SecurityToken {
    @JsonProperty
    private String username;

    @JsonProperty
    private List<String> userGroupProfile;

    /**
     * just puts in the username
     *
     * @param username gn4/gn5 username (get from DB)
     */
    public Gn4SecurityToken(String username) {
        this.username = username;
    }

    /**
     * creates a full token with profile-groups ("<group name>:<profile name>") also find the "max" profile to set as
     * the "generic" user profile
     *
     * @param username GN4 username
     * @param authorities authorities (from GN5 or external service)
     * @param roles group-profile info
     */
    public Gn4SecurityToken(
            String username, Collection<? extends GrantedAuthority> authorities, List<UserGroupProfile> roles) {
        this.username = username;
        if (roles != null) {
            this.userGroupProfile = roles.stream()
                    .map(x -> x.groupName + ":" + x.profile.toString())
                    .collect(Collectors.toList());
        }
        var profile = getBestMainProfile(authorities);
        if (userGroupProfile == null) {
            userGroupProfile = new ArrayList<>();
        }
        userGroupProfile.add(profile);
    }

    /**
     * given a set of authorities (from spring security auth), find the "biggest" GN4/GN5 profile. global biggest =
     * Administrator
     *
     * @param authorities
     * @return
     */
    private String getBestMainProfile(Collection<? extends GrantedAuthority> authorities) {
        if (authorities == null || authorities.isEmpty()) {
            return "RegisteredUser";
        }
        var profiles = authorities.stream()
                .map(x -> {
                    var roleName = x.getAuthority();
                    if (roleName.startsWith("ROLE_")) {
                        roleName = roleName.substring("ROLE_".length());
                    }
                    var profile = Profile.findProfileIgnoreCase(roleName);
                    return profile;
                })
                .filter(Objects::nonNull)
                .toList();
        if (profiles.isEmpty()) {
            return "RegisteredUser";
        }
        var result =
                profiles.stream().map(x -> x.ordinal()).min(Integer::compare).get();
        return Profile.values()[result].name();
    }
}
