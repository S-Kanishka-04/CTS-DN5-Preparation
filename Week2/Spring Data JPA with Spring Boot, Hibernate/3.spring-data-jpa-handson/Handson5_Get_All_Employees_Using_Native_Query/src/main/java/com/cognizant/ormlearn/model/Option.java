package com.cognizant.ormlearn.model;

import java.util.Set;
import jakarta.persistence.*;

@Entity
@Table(name = "options")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "option_id")
    private int id;

    @Column(name = "score")
    private double score;

    @Column(name = "correct")
    private boolean correct;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;
    
    @Column(name = "option_text", length = 200)
    private String optionText;

    @OneToMany(mappedBy = "option")
    private Set<AttemptOption> attemptOptionList;

    public Option() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOptionText() {
        return optionText;
    }

    public void setOptionText(String optionText) {
        this.optionText = optionText;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Set<AttemptOption> getAttemptOptionList() {
        return attemptOptionList;
    }

    public void setAttemptOptionList(Set<AttemptOption> attemptOptionList) {
        this.attemptOptionList = attemptOptionList;
    }
}