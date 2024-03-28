package P12_PREP_FINAL_EXAM;
// 100/100
// MAPS

import java.util.*;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;

public class E_04_03_HeroesOfCodeAndLogicVII_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        Map<String, List<Integer>> heroes = new LinkedHashMap<>();

        for (int i = 0; i < n; i++) {
            String line = scanner.nextLine();
            String hero = line.split(" ")[0];
            int hp = Integer.parseInt(line.split(" ")[1]);
            int mp = Integer.parseInt(line.split(" ")[2]);

            heroes.put(hero, new ArrayList<>());
            heroes.get(hero).add(hp);
            heroes.get(hero).add(mp);
        }

        String line = scanner.nextLine();
        while (!line.equals("End")) {
            String command = line.split(" - ")[0];
            String hero = line.split(" - ")[1];

            if (command.equals("CastSpell")) {
                int neededMP = Integer.parseInt(line.split(" - ")[2]);
                String spell = line.split(" - ")[3];

                int heroMP = heroes.get(hero).get(1);
                if (heroMP >= neededMP) {
                    heroMP -= neededMP;
                    heroes.get(hero).set(1, heroMP);
                    System.out.printf("%s has successfully cast %s and now has %d MP!\n", hero, spell, heroMP);
                } else {
                    System.out.printf("%s does not have enough MP to cast %s!\n", hero, spell);
                }


            } else if (command.equals("TakeDamage")) {
                int damage = Integer.parseInt(line.split(" - ")[2]);
                String attacker = line.split(" - ")[3];

                int heroHP = heroes.get(hero).get(0);
                int heroLeftHP = heroHP - damage;
                if (heroLeftHP <= 0) {
                    heroes.remove(hero);
                    System.out.printf("%s has been killed by %s!\n", hero, attacker);

                    line = scanner.nextLine();
                    continue;
                }

                heroes.get(hero).set(0, heroLeftHP);
                System.out.printf("%s was hit for %d HP by %s and now has %d HP left!\n", hero, damage, attacker, heroLeftHP);


            } else if (command.equals("Recharge")) {
                int rechargeMP = Integer.parseInt(line.split(" - ")[2]);

                int heroMP = heroes.get(hero).get(1);
                int savedMP = heroMP;
                heroMP = heroMP + rechargeMP;
                int usedMP = rechargeMP;

                if (heroMP > 200) {
                    usedMP = 200 - savedMP;
                    heroMP = 200;
                }

                heroes.get(hero).set(1, heroMP);
                System.out.printf("%s recharged for %d MP!\n", hero, usedMP);


            } else if (command.equals("Heal")) {
                int healHP = Integer.parseInt(line.split(" - ")[2]);

                int heroHP = heroes.get(hero).get(0);
                int savedHP = heroHP;
                heroHP = heroHP + healHP;
                int usedHP = healHP;

                if (heroHP > 100) {
                    usedHP = 100 - savedHP;
                    heroHP = 100;
                }

                heroes.get(hero).set(0, heroHP);
                System.out.printf("%s healed for %d HP!\n", hero, usedHP);
            }

            line = scanner.nextLine();
        }


        if (!heroes.isEmpty()) {
            for (Map.Entry<String, List<Integer>> entry : heroes.entrySet()) {
                System.out.printf("%s\n" +
                        "  HP: %d\n" +
                        "  MP: %d\n", entry.getKey(), entry.getValue().get(0), entry.getValue().get(1));
            }
        }
    }
}