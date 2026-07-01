package com.cognizant.ormlearn.model;

import java.util.Set;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private int id;

    @Column(name = "username", length = 100)
    private String username;

    @OneToMany(mappedBy="user")
    private Set<Attempt> attemptList;

    public User() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id=id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username=username;
    }

    public Set<Attempt> getAttemptList() {
        return attemptList;
    }

    public void setAttemptList(Set<Attempt> attemptList) {
        this.attemptList=attemptList;
    }

    @Override
    public String toString() {
        return username;
    }
}