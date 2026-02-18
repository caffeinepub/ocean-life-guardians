import List "mo:core/List";

actor {
  type Donation = {
    donorName : Text;
    amount : Nat;
    message : Text;
  };

  let donations = List.empty<Donation>();

  public shared ({ caller }) func recordDonation(donorName : Text, amount : Nat, message : Text) : async Bool {
    if (donorName == "" or amount <= 0) {
      return false;
    };

    let newDonation : Donation = {
      donorName;
      amount;
      message;
    };

    donations.add(newDonation);
    true;
  };

  public query ({ caller }) func getDonations() : async [Donation] {
    donations.toArray();
  };
};
