use std::error::Error;
use std::io;
use std::process;
use std::env;

fn read(decklist: &str) -> Result<(), Box<dyn Error>> {
    // Build the CSV reader and iterate over each record.
    let mut rdr = csv::Reader::from_reader(io::stdin());
    for result in rdr.records() {
        // The iterator yields Result<StringRecord, Error>, so we check the
        // error here.
        let record = result?;
        if record.get(0) == Some(decklist) {
            println!("{} {}", record.get(1).unwrap(), record.get(3).unwrap());
        }
    }
    Ok(())
}

fn main() {
    let args: Vec<String> = env::args().collect();
    if let Err(err) = read(&args[1]) {
        println!("error running read: {}", err);
        println!("usage: cargo run -- Pussihukat < all_my_cards.csv");
        println!("Or in Windows powershell: Get-Content .\\all_my_cards.csv | cargo run --Pussihukat");
        process::exit(1);
    }
}